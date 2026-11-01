// Runs on instagram.com. Only acts when the extension's own app page asks it to.

const FOLLOWING = /^(following|requested|följer|begärd|förfrågan skickad)$/i;
const FOLLOW = /^(follow|follow back|följ|följ tillbaka)$/i;
const CONFIRM = /^(unfollow|cancel request|sluta följa|avbryt förfrågan)$/i;
const BLOCKED = /(try again later|we restrict certain activity|försök igen senare|vi begränsar viss aktivitet)/i;
const MISSING = /(this page isn't available|sidan är inte tillgänglig)/i;

const sleep = ms => new Promise(r => setTimeout(r, ms));
const text = el => (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
const profileName = () => (location.pathname.split('/').filter(Boolean)[0] || '').toLowerCase();

async function waitFor(fn, ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    const v = fn();
    if (v) return v;
    await sleep(250);
  }
  return null;
}

// Only the profile header is searched, so "Follow" buttons under "Suggested for you" are never matched.
function headerButton(re) {
  for (const header of document.querySelectorAll('header')) {
    for (const b of header.querySelectorAll('button, [role="button"]')) {
      if (re.test(text(b))) return b;
    }
  }
  return null;
}

const dialogText = () => [...document.querySelectorAll('[role="dialog"], [role="alertdialog"]')].map(text).join(' ');

function dialogButton(re) {
  for (const d of document.querySelectorAll('[role="dialog"]')) {
    for (const b of d.querySelectorAll('button, [role="button"]')) {
      if (re.test(text(b))) return b;
    }
  }
  return null;
}

function pageState() {
  if (BLOCKED.test(dialogText())) return 'blocked';
  const following = headerButton(FOLLOWING);
  if (following) return { following };
  if (headerButton(FOLLOW)) return 'not-following';
  if (MISSING.test(document.title + ' ' + text(document.querySelector('main') || document.body).slice(0, 500))) return 'missing';
  return null;
}

// Asks Instagram whether you still follow the account. null when it can't be checked.
async function friendship(id) {
  if (!id) return null;
  const r = await api(`/api/v1/friendships/show/${id}/`).catch(() => null);
  return r?.ok && r.data && typeof r.data.following === 'boolean' ? r.data : null;
}
const stillFollowing = f => !!(f && (f.following || f.outgoing_request));

async function unfollow(username, id) {
  if (location.pathname.startsWith('/accounts/login')) return { status: 'logged-out' };
  if (profileName() !== username.toLowerCase()) return { status: 'error', detail: 'wrong-page' };

  const state = await waitFor(pageState, 15000);
  if (!state) return { status: 'error', detail: 'no-follow-button' };
  if (typeof state === 'string') return { status: state };

  // The header can render before React has hydrated it, and then a click does nothing. Click again once.
  let confirm = null;
  for (let attempt = 0; attempt < 2 && !confirm; attempt++) {
    (headerButton(FOLLOWING) || state.following).click();
    confirm = await waitFor(() => dialogButton(CONFIRM), attempt ? 6000 : 3000);
  }
  if (!confirm) return { status: 'error', detail: 'no-confirm-dialog' };
  await sleep(300); // let the dialog finish opening before clicking in it
  confirm.click();

  const result = await waitFor(() => (BLOCKED.test(dialogText()) ? 'blocked' : headerButton(FOLLOW) ? 'ok' : null), 10000);
  if (result === 'blocked') return { status: 'blocked' };

  // The button flips to "Follow" right away even when Instagram later drops the request,
  // so the result is checked against the server before it counts.
  await sleep(2500);
  if (BLOCKED.test(dialogText())) return { status: 'blocked' };
  const f = await friendship(id);
  if (stillFollowing(f)) return { status: 'not-applied' };
  if (f) return { status: 'ok', verified: true };
  return result ? { status: 'ok', verified: false } : { status: 'error', detail: 'not-confirmed' };
}

// The same read-only requests instagram.com makes when you open your own Followers/Following lists
// or look at a profile.
// Only these paths are allowed, and only GET.
const API_PATH = /^\/api\/v1\/(users\/\d+\/info\/|friendships\/show\/\d+\/|friendships\/\d+\/(followers|following)\/\?[\w=&%.-]*)$/;
const IG_APP_ID = '936619743392459'; // public id of the instagram.com web app

async function api(path) {
  if (!API_PATH.test(path)) return { ok: false, status: 0, error: 'path not allowed' };
  const res = await fetch(path, { credentials: 'include', headers: { 'x-ig-app-id': IG_APP_ID, 'x-requested-with': 'XMLHttpRequest' } });
  return { ok: res.ok, status: res.status, data: await res.json().catch(() => null) };
}

async function whoami() {
  const id = document.cookie.match(/(?:^|;\s*)ds_user_id=(\d+)/)?.[1];
  if (!id) return { loggedIn: false };
  const r = await api(`/api/v1/users/${id}/info/`);
  const u = r.data?.user;
  return {
    loggedIn: true, id, username: u?.username || null, fullName: u?.full_name || '',
    picture: u?.profile_pic_url || '', followers: u?.follower_count ?? null, following: u?.following_count ?? null,
  };
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === 'ping') {
    // loadedAt lets the app tell a freshly loaded profile from the page that was there before it navigated.
    sendResponse({ path: location.pathname, loadedAt: performance.timeOrigin });
  } else if (msg?.type === 'whoami' || msg?.type === 'api') {
    (msg.type === 'whoami' ? whoami() : api(String(msg.path || ''))).then(sendResponse, e => sendResponse({ ok: false, status: 0, error: e.message }));
    return true;
  } else if (msg?.type === 'unfollow') {
    unfollow(String(msg.username || ''), /^\d+$/.test(msg.id || '') ? msg.id : null).then(sendResponse, e => sendResponse({ status: 'error', detail: e.message }));
    return true;
  }
});
