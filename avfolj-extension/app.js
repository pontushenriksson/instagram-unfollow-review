const KEY = 'ig-avfolj-granskning-v1';
const PREVIEW_W = 460;
const HOVER_DELAY = 200;
const SAFE_DELAY = 15; // seconds; faster than this is allowed, but warned about
const STEP_OVERHEAD = 9; // seconds one unfollow takes on its own (load profile, click, verify)

// --- Texts ------------------------------------------------------------------

const TEXT = {
  sv: {
    title: 'Rensa',
    tagline: 'Avfölj smart på Instagram',
    saved: 'Sparat {t}',
    saveFailed: 'Kunde inte spara',
    listNon: 'Följer inte tillbaka',
    listAll: 'Alla jag följer',
    listMutual: 'Följer tillbaka',
    listFollowers: 'Mina följare',
    listDone: 'Avföljda',
    followsYou: 'Följer dig', notFollowing: 'Du följer inte',
    fAll: 'Alla', fTodo: 'Obesvarade', fDrop: 'Avfölj', fKeep: 'Behåll',
    search: 'Sök namn eller användarnamn',
    keep: 'Behåll', drop: 'Avfölj', doneAt: 'Avföljd {t}', failed: 'Misslyckades', notApplied: 'Gick inte igenom, försöks igen',
    stDrop: 'att avfölja', stKeep: 'behålls', stTodo: 'obesvarade', stDone: 'avföljda totalt',
    run: 'Avfölj {n}', runNone: 'Markera konton att avfölja',
    pace: 'Ett konto var {s}:e s, cirka {m} min', paceFast: 'Snabbt tempo, på egen risk',
    export: 'Exportera avfölj-listan (CSV)', settings: 'Inställningar',
    hover: 'Håll musen över ett namn så visas profilen i förhandsfönstret.',
    keys: 'A behåll · D avfölj · ↑/↓ bläddra · U rensa val · N nästa obesvarade',
    noMatches: 'Inga träffar',
    nothingMarked: 'Inga konton är markerade som Avfölj.',
    emptyTitle: 'Kom igång',
    emptyIntro: 'Rensa synkar vilka du följer och vilka som följer dig från kontot du är inloggad på i Chrome. Är du inte inloggad: logga in på instagram.com i förhandsfönstret och klicka Synka nu.',
    sync: 'Synka nu', syncing: 'Synkar…',
    checking: 'Kollar vilket konto som är inloggat…',
    fetchingFollowing: 'Synkar vilka du följer: {n} av {total}',
    fetchingFollowers: 'Synkar dina följare: {n} av {total}',
    synced: 'Synkat: du följer {following} och har {followers} följare.',
    reverted: '{n} avföljningar hade inte gått igenom enligt Instagram. De ligger kvar som Avfölj.',
    syncLoggedOut: 'Du är inte inloggad på Instagram. Logga in i förhandsfönstret och klicka Synka nu.',
    syncFailed: 'Kunde inte synka med Instagram: {e}',
    rateLimited: 'Instagram ber dig vänta (för många förfrågningar). Försök igen om en stund.',
    accountMeta: '{followers} följare · {following} följer',
    syncedAt: 'synkat {t}',
    accountSwitched: 'Inloggad som @{u}. Valen sparas separat för varje konto.',
    notSynced: 'inte synkat än',
    privacy: 'Allt hämtas via din egen inloggning och sparas bara lokalt i din webbläsare. Inget skickas någon annanstans.',
    delay: 'Paus mellan avföljningar (sekunder)',
    max: 'Max antal per körning',
    limitNote: 'Instagram begränsar hur många konton man får avfölja per timme och dygn, och gränserna är inte offentliga. Går man över kan kontot tillfälligt spärras från att följa och avfölja. Kör hellre flera små omgångar än en stor. Automatiserade åtgärder kan strida mot Instagrams villkor.',
    paceWarn: 'Under {safe} sekunder mellan avföljningar är snabbare än en människa klickar. Risken är stor att Instagram spärrar kontot från att följa och avfölja i timmar eller dagar, eller börjar ignorera avföljningarna utan att säga till. Du kör på egen risk.',
    confirmRun: 'Avfölja {n} konton nu?\n\nEtt konto var {s}:e sekund, ungefär {m} min. Låt båda fönstren vara öppna och var inloggad på Instagram i förhandsfönstret.',
    confirmFast: 'VARNING: snabbt tempo ({s} s). Instagram kan spärra kontot. Du kör på egen risk.\n\n',
    nothingToRun: 'Det finns inga markerade konton kvar att avfölja.',
    running: 'Avföljer @{u}',
    progress: '{i} av {n} klara · {ok} avföljda',
    waiting: 'Nästa om {s} s',
    finished: 'Klart. {ok} avföljda, {fail} misslyckades.',
    stopped: 'Stoppad. {ok} avföljda, {fail} misslyckades.',
    blocked: 'Instagram verkar ha begränsat ditt konto ("Försök igen senare"). Körningen stoppades. Vänta innan du kör igen.',
    silentBlock: 'Två avföljningar i rad gick inte igenom fast knappen bytte till Följ. Instagram begränsar troligen kontot i tysthet. Körningen stoppades. Vänta några timmar och kör långsammare.',
    loggedOut: 'Du är inte inloggad på Instagram i förhandsfönstret. Logga in där och starta igen.',
    tooManyErrors: 'Tre fel i rad, körningen stoppades. Kolla förhandsfönstret: är du inloggad och ser profilen ut som vanligt?',
    stop: 'Stoppa',
    exportHeader: 'Användarnamn,Länk,Status',
    exportDone: 'Avföljd', exportPending: 'Ej avföljd',
    previewError: 'Kunde inte visa profilen: {e}',
    otherLang: 'EN',
  },
  en: {
    title: 'Rensa',
    tagline: 'Unfollow smart on Instagram',
    saved: 'Saved {t}',
    saveFailed: 'Could not save',
    listNon: "Don't follow back",
    listAll: 'Everyone I follow',
    listMutual: 'Follow back',
    listFollowers: 'My followers',
    listDone: 'Unfollowed',
    followsYou: 'Follows you', notFollowing: "You don't follow",
    fAll: 'All', fTodo: 'Undecided', fDrop: 'Unfollow', fKeep: 'Keep',
    search: 'Search name or username',
    keep: 'Keep', drop: 'Unfollow', doneAt: 'Unfollowed {t}', failed: 'Failed', notApplied: "Didn't go through, will retry",
    stDrop: 'to unfollow', stKeep: 'kept', stTodo: 'undecided', stDone: 'unfollowed in total',
    run: 'Unfollow {n}', runNone: 'Mark accounts to unfollow',
    pace: 'One account every {s} s, about {m} min', paceFast: 'Fast pace, at your own risk',
    export: 'Export unfollow list (CSV)', settings: 'Settings',
    hover: 'Hover over a name to show the profile in the preview window.',
    keys: 'A keep · D unfollow · ↑/↓ browse · U clear · N next undecided',
    noMatches: 'No matches',
    nothingMarked: 'No accounts are marked as Unfollow.',
    emptyTitle: 'Get started',
    emptyIntro: 'Rensa syncs who you follow and who follows you from the account you are logged in to in Chrome. Not logged in? Log in to instagram.com in the preview window and click Sync now.',
    sync: 'Sync now', syncing: 'Syncing…',
    checking: 'Checking which account is logged in…',
    fetchingFollowing: 'Syncing who you follow: {n} of {total}',
    fetchingFollowers: 'Syncing your followers: {n} of {total}',
    synced: 'Synced: you follow {following} and have {followers} followers.',
    reverted: "{n} unfollows hadn't gone through according to Instagram. They stay marked as Unfollow.",
    syncLoggedOut: 'You are not logged in to Instagram. Log in in the preview window and click Sync now.',
    syncFailed: 'Could not sync with Instagram: {e}',
    rateLimited: 'Instagram asks you to wait (too many requests). Try again in a while.',
    accountMeta: '{followers} followers · {following} following',
    syncedAt: 'synced {t}',
    accountSwitched: 'Logged in as @{u}. Choices are saved separately for each account.',
    notSynced: 'not synced yet',
    privacy: 'Everything is fetched through your own login and stored only locally in your browser. Nothing is sent anywhere else.',
    delay: 'Pause between unfollows (seconds)',
    max: 'Max per run',
    limitNote: "Instagram limits how many accounts you can unfollow per hour and day, and the limits are not public. Going over can temporarily block your account from following and unfollowing. Prefer several small runs over one big one. Automated actions may go against Instagram's terms.",
    paceWarn: 'Less than {safe} seconds between unfollows is faster than a person clicks. There is a real risk that Instagram blocks the account from following and unfollowing for hours or days, or starts silently ignoring the unfollows. You run it at your own risk.',
    confirmRun: 'Unfollow {n} accounts now?\n\nOne account every {s} seconds, about {m} min. Keep both windows open and stay logged in to Instagram in the preview window.',
    confirmFast: 'WARNING: fast pace ({s} s). Instagram may block the account. You run it at your own risk.\n\n',
    nothingToRun: 'There are no marked accounts left to unfollow.',
    running: 'Unfollowing @{u}',
    progress: '{i} of {n} done · {ok} unfollowed',
    waiting: 'Next in {s} s',
    finished: 'Done. {ok} unfollowed, {fail} failed.',
    stopped: 'Stopped. {ok} unfollowed, {fail} failed.',
    blocked: 'Instagram seems to have limited your account ("Try again later"). The run was stopped. Wait before running again.',
    silentBlock: "Two unfollows in a row didn't go through even though the button changed to Follow. Instagram is probably limiting the account silently. The run was stopped. Wait a few hours and run slower.",
    loggedOut: 'You are not logged in to Instagram in the preview window. Log in there and start again.',
    tooManyErrors: 'Three errors in a row, the run was stopped. Check the preview window: are you logged in and does the profile look normal?',
    stop: 'Stop',
    exportHeader: 'Username,Link,Status',
    exportDone: 'Unfollowed', exportPending: 'Not unfollowed',
    previewError: 'Could not show the profile: {e}',
    otherLang: 'SV',
  },
};

function t(key, vars = {}) {
  const s = TEXT[state.lang]?.[key] ?? TEXT.en[key] ?? key;
  return typeof s === 'string' ? s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '') : s;
}

// --- State ------------------------------------------------------------------

// people: [{ u, id, name, pic, verified, link, following, followsBack }]
// decisions: username -> 'keep' | 'drop'; unfollowed: username -> timestamp; failed: username -> reason
// account: the Instagram account the data belongs to ({ id, username, fullName, picture, followers, following, syncedAt })
const freshData = () => ({ people: [], decisions: {}, unfollowed: {}, failed: {}, current: null, list: 'non', filter: 'all', account: null });
let state = {
  ...freshData(), settings: { delay: 60, max: 50 },
  lang: (navigator.language || 'en').toLowerCase().startsWith('sv') ? 'sv' : 'en',
};
// 'mouse' while hovering, 'keys' while using arrows. Keyboard decisions only auto-advance in 'keys' mode,
// otherwise the next row would be selected while the mouse still points at the previous one.
let lastInput = 'mouse';
let run = null;
let syncing = null; // { text, n, total } while a sync is going

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!saved) return;
    state = { ...state, ...saved, settings: { ...state.settings, ...saved.settings } };
    state.unfollowed ||= {};
    state.failed ||= {};
    if (state.filter === 'done') { state.filter = 'all'; state.list = 'done'; } // used to be a filter
    for (const p of state.people) if (state.unfollowed[p.u]) p.following = false;
  } catch (e) {}
}

// Profile picture URLs are signed and expire, and every open syncs fresh ones, so they are not stored.
const serialize = () => JSON.stringify(state, (k, v) => (k === 'pic' ? undefined : v));

function save() {
  const el = document.getElementById('saved');
  try {
    localStorage.setItem(KEY, serialize());
    el.textContent = t('saved', { t: new Date().toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' }) });
  } catch (e) {
    el.textContent = t('saveFailed');
  }
}

const locale = () => (state.lang === 'sv' ? 'sv-SE' : undefined);
const profileUrl = u => `https://www.instagram.com/${encodeURIComponent(u)}/`;
const fastPace = () => state.settings.delay < SAFE_DELAY;

// --- Preview window ---------------------------------------------------------
// Instagram's Cross-Origin-Opener-Policy cuts a page off from windows it opened with window.open,
// so the window is driven through the extension APIs instead.

let wantedUrl = null;
let queue = Promise.resolve();

function showPreview(url) {
  if (url === wantedUrl) return;
  wantedUrl = url;
  queue = queue.then(() => (url === wantedUrl ? openPreview(url) : null)).catch(e => setStatus(t('previewError', { e: e.message })));
}

// Navigates the preview window (creating it if needed) and returns its tab id.
async function openPreview(url) {
  const { previewTabId } = await chrome.storage.session.get('previewTabId');
  if (previewTabId) {
    try {
      await chrome.tabs.update(previewTabId, { url });
      return previewTabId;
    } catch (e) {} // window was closed, create a new one
  }
  const me = await chrome.windows.getCurrent();
  const maxLeft = screen.availLeft + screen.availWidth - PREVIEW_W;
  const w = await chrome.windows.create({
    url, type: 'popup', focused: false,
    width: PREVIEW_W, height: me.height, top: me.top, left: Math.min(me.left + me.width, maxLeft),
  });
  await chrome.storage.session.set({ previewTabId: w.tabs[0].id });
  await chrome.windows.update(me.id, { focused: true });
  return w.tabs[0].id;
}

async function placeAppWindow() {
  const me = await chrome.windows.getCurrent();
  if (me.type !== 'popup') return; // opened as a normal tab, leave it alone
  await chrome.windows.update(me.id, {
    left: screen.availLeft, top: screen.availTop,
    width: Math.max(420, Math.min(640, screen.availWidth - PREVIEW_W)), height: screen.availHeight,
  });
}

function setStatus(text) {
  const el = document.getElementById('status');
  el.textContent = text;
  el.hidden = false;
}

// --- Unfollow run -----------------------------------------------------------

const sleep = ms => new Promise(r => setTimeout(r, ms));
const firstSegment = path => (path || '').split('/').filter(Boolean)[0]?.toLowerCase() || '';

// Waits until the content script reports that the given profile has loaded after `since`.
// Without the load time check, a preview that already showed this profile (from hovering it)
// answers before the new load starts, and the unfollow is sent to a page that is going away.
async function waitForProfile(tabId, u, since, ms = 25000) {
  const end = Date.now() + ms;
  while (Date.now() < end && !run?.stop) {
    try {
      const r = await chrome.tabs.sendMessage(tabId, { type: 'ping' });
      if (r?.path?.startsWith('/accounts/login')) return 'logged-out';
      if (firstSegment(r?.path) === u.toLowerCase() && r.loadedAt >= since - 100) return 'ready';
    } catch (e) {} // content script not loaded yet
    await sleep(500);
  }
  return 'timeout';
}

// One unfollow, retried once on a fresh page load if it errored or Instagram didn't apply it.
async function unfollowOne(p) {
  let res = { status: 'error' };
  for (let attempt = 0; attempt < 2 && !run.stop; attempt++) {
    if (attempt) await sleep(3000);
    const since = Date.now();
    const tabId = await openPreview(p.link);
    wantedUrl = p.link;
    const ready = await waitForProfile(tabId, p.u, since);
    if (ready === 'logged-out') return { status: 'logged-out' };
    if (ready !== 'ready') { res = { status: 'error', detail: 'timeout' }; continue; }
    await sleep(1500); // let instagram.com hydrate the page before clicking
    try {
      res = (await chrome.tabs.sendMessage(tabId, { type: 'unfollow', username: p.u, id: p.id })) || { status: 'error' };
    } catch (e) {
      res = { status: 'error', detail: e.message };
      continue;
    }
    if (res.status !== 'error' && res.status !== 'not-applied') return res;
  }
  return res;
}

// --- Sync with Instagram ----------------------------------------------------

const PAGE_SIZE = 50;
const PAGE_PAUSE = 1500; // between list pages, roughly the pace of scrolling the list on instagram.com

// Sends a message to the content script, retrying while the page is still (re)loading.
async function ask(tabId, msg, tries = 8) {
  for (let i = 0; ; i++) {
    try {
      const r = await chrome.tabs.sendMessage(tabId, msg);
      if (r !== undefined) return r;
    } catch (e) {
      if (i >= tries) throw e;
    }
    await sleep(1000);
  }
}

async function instagramTab() {
  const url = 'https://www.instagram.com/';
  wantedUrl = url;
  const tabId = await openPreview(url);
  await sleep(1500); // let the old page unload before talking to the new one
  await ask(tabId, { type: 'ping' }, 20);
  return tabId;
}

async function fetchList(tabId, me, kind) {
  const users = [];
  let maxId = '';
  const total = kind === 'following' ? me.following : me.followers;
  for (;;) {
    const path = `/api/v1/friendships/${me.id}/${kind}/?count=${PAGE_SIZE}${maxId ? `&max_id=${encodeURIComponent(maxId)}` : ''}`;
    const r = await ask(tabId, { type: 'api', path });
    if (!r?.ok) throw new Error(r?.status === 429 || /wait/i.test(r?.data?.message || '') ? t('rateLimited') : `HTTP ${r?.status} ${r?.data?.message || r?.error || ''}`.trim());
    for (const x of r.data?.users || []) {
      users.push({ u: x.username, id: String(x.pk ?? x.pk_id ?? x.id ?? ''), name: x.full_name || '', pic: x.profile_pic_url || '', verified: !!x.is_verified });
    }
    syncing = { text: kind === 'following' ? 'fetchingFollowing' : 'fetchingFollowers', n: users.length, total: total ?? users.length };
    renderAccount();
    maxId = r.data?.next_max_id;
    if (!maxId) return users;
    await sleep(PAGE_PAUSE);
  }
}

// Choices are stored per Instagram account, so logging in to another account never mixes lists.
function switchAccount(me) {
  if (state.account?.id === me.id) return false;
  try {
    if (state.account) localStorage.setItem(`${KEY}:acct:${state.account.id}`, serialize());
  } catch (e) {}
  let stored = null;
  try { stored = JSON.parse(localStorage.getItem(`${KEY}:acct:${me.id}`) || 'null'); } catch (e) {}
  if (stored) {
    state = { ...stored, lang: state.lang, settings: state.settings };
  } else {
    if (state.account) state = { ...state, ...freshData() };
    state.account = { id: me.id };
  }
  return true;
}

function applyAccount(me) {
  state.account = { ...state.account, id: me.id, username: me.username, fullName: me.fullName, picture: me.picture, followers: me.followers, following: me.following };
}

// Fetches who you follow and who follows you from the logged-in account. Runs every time the app
// opens, when the toolbar button is clicked and after every unfollow run.
async function syncFromInstagram({ prefix = '' } = {}) {
  if (run || syncing) return;
  syncing = { text: 'checking' };
  render();
  try {
    const tabId = await instagramTab();
    const me = await ask(tabId, { type: 'whoami' });
    if (!me?.loggedIn) { setStatus(t('syncLoggedOut')); return; }
    const switched = switchAccount(me);
    applyAccount(me);
    save();
    render();
    if (switched && state.people.length) setStatus(t('accountSwitched', { u: me.username }));
    const following = await fetchList(tabId, me, 'following');
    const followers = await fetchList(tabId, me, 'followers');
    const reverted = mergePeople(following, followers, state.account.syncedAt || 0);
    state.account.syncedAt = Date.now();
    state.account.following = following.length;
    state.account.followers = followers.length;
    save();
    const msg = t('synced', { following: following.length, followers: followers.length }) + (reverted ? ' ' + t('reverted', { n: reverted }) : '');
    setStatus(prefix ? `${prefix} ${msg}` : msg);
  } catch (e) {
    setStatus(t('syncFailed', { e: e.message }));
  } finally {
    syncing = null;
    render();
  }
}

// Replaces the lists with what Instagram says now. Unfollowed accounts are kept for the Unfollowed list.
// Returns how many unfollows since the last sync Instagram didn't apply.
function mergePeople(following, followers, lastSync) {
  const prev = new Map(state.people.map(p => [p.u, p]));
  const fol = new Map(following.map(x => [x.u, x]));
  const fan = new Map(followers.map(x => [x.u, x]));
  let reverted = 0;
  for (const u of Object.keys(state.unfollowed)) {
    if (!fol.has(u)) continue;
    // Still followed: either Instagram dropped the unfollow, or you followed them again yourself.
    if (state.unfollowed[u] > lastSync) {
      state.failed[u] = 'not-applied';
      state.decisions[u] = 'drop';
      reverted++;
    } else if (state.decisions[u] === 'drop') {
      delete state.decisions[u];
    }
    delete state.unfollowed[u];
  }
  const names = new Set([...fol.keys(), ...fan.keys(), ...Object.keys(state.unfollowed).filter(u => prev.has(u))]);
  state.people = [...names].sort().map(u => {
    const x = fol.get(u) || fan.get(u) || prev.get(u);
    return { u, id: x.id || prev.get(u)?.id || null, name: x.name || '', pic: x.pic || '', verified: !!x.verified, link: profileUrl(u), following: fol.has(u), followsBack: fan.has(u) };
  });
  if (!state.people.some(p => p.u === state.current)) state.current = state.people.find(matches)?.u || null;
  return reverted;
}

async function countdown(seconds) {
  for (let s = seconds; s > 0 && !run.stop; s--) {
    run.wait = s;
    renderRun();
    await sleep(1000);
  }
  run.wait = 0;
}

async function startRun() {
  if (run || syncing) return;
  const targets = pendingDrops().slice(0, state.settings.max);
  if (!targets.length) { alert(t('nothingToRun')); return; }
  const n = targets.length;
  const s = state.settings.delay;
  const question = (fastPace() ? t('confirmFast', { s }) : '') + t('confirmRun', { n, s, m: Math.ceil(n * (s + STEP_OVERHEAD) / 60) });
  if (!confirm(question)) return;

  run = { stop: false, ok: 0, fail: 0, n, i: 0, u: '', wait: 0, errorsInRow: 0, silentInRow: 0 };
  render();
  let message = null;
  for (let i = 0; i < n && !run.stop; i++) {
    const p = targets[i];
    run.i = i;
    run.u = p.u;
    renderRun();
    markCurrent(p.u, true);
    const res = await unfollowOne(p);
    if (res.status === 'ok' || res.status === 'not-following') {
      state.unfollowed[p.u] = Date.now();
      delete state.failed[p.u];
      p.following = false;
      run.ok++;
      run.errorsInRow = run.silentInRow = 0;
    } else if (res.status === 'blocked') { message = t('blocked'); break; }
    else if (res.status === 'logged-out') { message = t('loggedOut'); break; }
    else {
      state.failed[p.u] = res.detail || res.status;
      run.fail++;
      if (res.status === 'not-applied') {
        if (++run.silentInRow >= 2) { message = t('silentBlock'); break; }
      } else if (res.status !== 'missing' && ++run.errorsInRow >= 3) { message = t('tooManyErrors'); break; }
    }
    run.i = i + 1;
    save();
    render();
    // Only wait after an actual unfollow; skipped and missing profiles cost Instagram nothing.
    if (res.status === 'ok' && i < n - 1) await countdown(s);
  }
  const summary = t(run.stop || message ? 'stopped' : 'finished', { ok: run.ok, fail: run.fail });
  const synced = run.ok > 0 && message !== t('blocked') && message !== t('silentBlock');
  run = null;
  save();
  render();
  setStatus(message ? `${message} ${summary}` : summary);
  if (message) alert(message);
  // A fresh sync both updates the lists and checks that every unfollow really went through.
  if (synced) syncFromInstagram({ prefix: message ? `${message} ${summary}` : summary });
}

// --- Selection and decisions ------------------------------------------------

const q = () => document.getElementById('q').value.trim().toLowerCase().replace(/^@/, '');
function inList(p, list = state.list) {
  if (list === 'all') return p.following;
  if (list === 'followers') return p.followsBack === true;
  if (list === 'mutual') return p.following && p.followsBack === true;
  if (list === 'done') return !!state.unfollowed[p.u];
  return p.following && p.followsBack === false;
}
function matches(p) {
  if (!inList(p)) return false;
  const d = state.decisions[p.u];
  if (state.list !== 'done') {
    if (state.filter === 'todo' && (d || !p.following)) return false;
    if (state.filter === 'drop' && d !== 'drop') return false;
    if (state.filter === 'keep' && d !== 'keep') return false;
  }
  const s = q();
  return !s || p.u.toLowerCase().includes(s) || (p.name || '').toLowerCase().includes(s);
}
const pendingDrops = () => state.people.filter(p => p.following && state.decisions[p.u] === 'drop' && !state.unfollowed[p.u]);
const visible = () => state.people.filter(matches);
const indexOf = u => state.people.findIndex(p => p.u === u);
const person = u => state.people.find(p => p.u === u) || null;
const rowFor = u => document.querySelector(`li[data-u="${CSS.escape(u)}"]`);

function markCurrent(u, scroll) {
  if (state.current !== u) {
    rowFor(state.current || '')?.classList.remove('cur');
    state.current = u;
    save();
  }
  const li = rowFor(u);
  li?.classList.add('cur');
  if (scroll) li?.scrollIntoView({ block: 'nearest' });
}

function select(u, { scroll = false } = {}) {
  const p = person(u);
  if (!p || run) return; // the preview window belongs to the unfollow run while it is going
  markCurrent(u, scroll);
  showPreview(p.link);
}

// Step through the full list from the current person so it still works when the
// current person just dropped out of the filter (e.g. "Undecided").
function step(dir) {
  const n = state.people.length;
  let i = indexOf(state.current);
  if (i < 0) i = dir > 0 ? -1 : n;
  for (let k = 0; k < n; k++) {
    i += dir;
    if (i < 0 || i >= n) return false;
    if (matches(state.people[i])) { select(state.people[i].u, { scroll: true }); return true; }
  }
  return false;
}

function decide(u, kind, { advance = false } = {}) {
  if (!person(u)?.following || state.unfollowed[u]) return;
  const toggledOff = state.decisions[u] === kind;
  if (toggledOff) delete state.decisions[u];
  else state.decisions[u] = kind;
  save();
  render();
  if (advance && !toggledOff) step(1);
}

function clear(u) {
  if (!u || !state.decisions[u] || state.unfollowed[u]) return;
  delete state.decisions[u];
  save();
  render();
}

// --- Rendering --------------------------------------------------------------

function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
const num = n => (n == null ? '?' : Number(n).toLocaleString(locale()));
const VERIFIED = '<svg class="verified" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 2.1 3.1-.5 1 3 2.9 1.4-.7 3.1 1.3 2.9-2.6 1.9-.3 3.2-3.2.1L12 22l-2.5-2-3.2-.1-.3-3.2-2.6-1.9 1.3-2.9-.7-3.1L6.9 7.6l1-3 3.1.5z"/><path d="M8.5 12.2l2.4 2.4 4.6-4.9" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const avatar = p => (p.pic
  ? `<img class="av" src="${esc(p.pic)}" alt="" loading="lazy" referrerpolicy="no-referrer">`
  : `<span class="av">${esc((p.u[0] || '?').toUpperCase())}</span>`);

function renderStaticText() {
  document.documentElement.lang = state.lang;
  document.title = t('title');
  const set = (id, key, vars) => { document.getElementById(id).textContent = t(key, vars); };
  set('tagline', 'tagline');
  set('lang', 'otherLang');
  set('export', 'export');
  set('settings-title', 'settings');
  set('stop', 'stop');
  set('delay-label', 'delay');
  set('max-label', 'max');
  set('limit-note', 'limitNote');
  set('pace-warn', 'paceWarn', { safe: SAFE_DELAY });
  set('empty-title', 'emptyTitle');
  set('privacy', 'privacy');
  set('empty-intro', 'emptyIntro');
  set('hint', 'keys');
  document.getElementById('settings-toggle').title = t('settings');
  document.getElementById('q').placeholder = t('search');
  document.getElementById('pace-warn').hidden = !fastPace();
  document.getElementById('delay').classList.toggle('risky', fastPace());
  for (const id of ['delay', 'max']) {
    const el = document.getElementById(id);
    if (document.activeElement !== el) el.value = state.settings[id];
  }
}

function renderAccount() {
  const a = state.account;
  const sync = document.getElementById('sync');
  const emptySync = document.getElementById('empty-sync');
  for (const b of [sync, emptySync]) {
    b.disabled = !!syncing || !!run;
    b.classList.toggle('spinning', !!syncing);
  }
  sync.title = t('sync');
  emptySync.querySelector('span').textContent = syncing ? t('syncing') : t('sync');

  const bar = document.getElementById('sync-bar');
  bar.hidden = !syncing;
  if (syncing) {
    const pct = syncing.total ? Math.min(100, syncing.n / syncing.total * 100) : 0;
    document.getElementById('sync-fill').style.width = `${syncing.total ? pct : 15}%`;
    bar.classList.toggle('indeterminate', !syncing.total);
  }

  const box = document.getElementById('account');
  box.hidden = !a?.username;
  if (!a?.username) {
    if (syncing) setStatus(t(syncing.text, { n: num(syncing.n), total: num(syncing.total) }));
    return;
  }
  const img = document.getElementById('avatar');
  if (a.picture && img.dataset.src !== a.picture) { img.hidden = false; img.dataset.src = a.picture; img.src = a.picture; }
  document.getElementById('acct-user').textContent = '@' + a.username;
  document.getElementById('acct-name').textContent = a.fullName || '';
  let meta;
  if (syncing) meta = t(syncing.text, { n: num(syncing.n), total: num(syncing.total) });
  else {
    const when = a.syncedAt ? t('syncedAt', { t: new Date(a.syncedAt).toLocaleString(locale(), { dateStyle: 'short', timeStyle: 'short' }) }) : t('notSynced');
    meta = (a.followers != null ? t('accountMeta', { followers: num(a.followers), following: num(a.following) }) + ' · ' : '') + when;
  }
  document.getElementById('acct-meta').textContent = meta;
}

function renderRun() {
  const box = document.getElementById('runbox');
  box.hidden = !run;
  if (!run) return;
  document.getElementById('run-title').textContent = t('running', { u: run.u });
  document.getElementById('run-text').textContent = t('progress', { i: run.i, n: run.n, ok: run.ok }) + (run.wait ? ' · ' + t('waiting', { s: run.wait }) : '');
  document.getElementById('run-fill').style.width = `${run.i / run.n * 100}%`;
}

function render() {
  renderStaticText();
  renderAccount();
  renderRun();
  const hasData = state.people.length > 0;
  document.getElementById('empty').hidden = hasData;
  for (const id of ['main', 'actions', 'list', 'hint']) document.getElementById(id).hidden = !hasData;
  if (!hasData) return;

  const counts = { non: 0, all: 0, followers: 0, mutual: 0, done: 0 };
  for (const p of state.people) for (const k in counts) if (inList(p, k)) counts[k]++;
  const lists = [['non', 'listNon'], ['all', 'listAll'], ['followers', 'listFollowers'], ['mutual', 'listMutual'], ['done', 'listDone']]
    .filter(([k]) => k === 'non' || k === 'all' || counts[k] || state.list === k);
  document.getElementById('tabs').innerHTML = lists.map(([k, key]) =>
    `<button class="tab ${state.list === k ? 'on' : ''}" data-list="${k}">${esc(t(key))}<span class="count">${num(counts[k])}</span></button>`).join('');

  const filter = document.getElementById('filter');
  filter.hidden = state.list === 'done';
  filter.innerHTML = [['all', 'fAll'], ['todo', 'fTodo'], ['drop', 'fDrop'], ['keep', 'fKeep']]
    .map(([k, key]) => `<option value="${k}">${esc(t(key))}</option>`).join('');
  filter.value = state.filter;

  let drop = 0, keep = 0, actionable = 0;
  for (const p of state.people) {
    if (!inList(p) || !p.following) continue;
    actionable++;
    const d = state.decisions[p.u];
    if (d === 'drop') drop++;
    else if (d === 'keep') keep++;
  }
  const todo = actionable - drop - keep;
  const pct = n => (actionable ? n / actionable * 100 : 0);
  document.getElementById('bar').innerHTML =
    `<span style="width:${pct(drop)}%;background:var(--drop)"></span>` +
    `<span style="width:${pct(keep)}%;background:var(--keep)"></span>`;
  const tile = (n, key, cls, attr) => `<button class="tile ${cls}" ${attr}><b>${num(n)}</b><span>${esc(t(key))}</span></button>`;
  document.getElementById('stats').innerHTML =
    tile(drop, 'stDrop', `drop ${state.filter === 'drop' && state.list !== 'done' ? 'on' : ''}`, 'data-filter="drop"') +
    tile(keep, 'stKeep', `keep ${state.filter === 'keep' && state.list !== 'done' ? 'on' : ''}`, 'data-filter="keep"') +
    tile(todo, 'stTodo', `todo ${state.filter === 'todo' && state.list !== 'done' ? 'on' : ''}`, 'data-filter="todo"') +
    tile(counts.done, 'stDone', `done ${state.list === 'done' ? 'on' : ''}`, 'data-list="done"');

  const pending = pendingDrops().length;
  const n = Math.min(pending, state.settings.max);
  const runBtn = document.getElementById('run');
  runBtn.textContent = pending ? t('run', { n }) : t('runNone');
  runBtn.disabled = !!run || !!syncing || !pending;
  const pace = document.getElementById('pace');
  pace.textContent = fastPace() ? t('paceFast') : t('pace', { s: state.settings.delay, m: Math.max(1, Math.ceil(n * (state.settings.delay + STEP_OVERHEAD) / 60)) });
  pace.classList.toggle('risky', fastPace());

  const items = visible();
  document.getElementById('list').innerHTML = items.length ? items.map(x => {
    const d = state.decisions[x.u];
    const fail = state.failed[x.u];
    const followsYou = state.list === 'all' && x.followsBack === true ? `<span class="tag">${esc(t('followsYou'))}</span>` : '';
    const right = state.unfollowed[x.u]
      ? `<span class="tag">${esc(t('doneAt', { t: new Date(state.unfollowed[x.u]).toLocaleDateString(locale(), { day: 'numeric', month: 'short' }) }))}</span>`
      : !x.following
      ? `<span class="tag">${esc(t('notFollowing'))}</span>`
      : `${followsYou}${fail ? `<span class="tag fail" title="${esc(fail)}">${esc(t(fail === 'not-applied' ? 'notApplied' : 'failed'))}</span>` : ''}
        <span class="pick">
          <button class="keep ${d === 'keep' ? 'on' : ''}" data-act="keep">${esc(t('keep'))}</button>
          <button class="drop ${d === 'drop' ? 'on' : ''}" data-act="drop">${esc(t('drop'))}</button>
        </span>`;
    const name = x.name ? `<small>${esc(x.name)}</small>` : '';
    return `<li data-u="${esc(x.u)}" class="${x.u === state.current ? 'cur' : ''} ${d === 'drop' && !state.unfollowed[x.u] ? 'marked' : ''}">${avatar(x)}<span class="u"><span class="handle">${esc(x.u)}${x.verified ? VERIFIED : ''}</span>${name}</span>${right}</li>`;
  }).join('') : `<li class="empty">${esc(t('noMatches'))}</li>`;

  const status = document.getElementById('status');
  if (status.hidden) setStatus(t('hover'));
}

// --- Export -----------------------------------------------------------------

const dropList = () => state.people.filter(p => state.decisions[p.u] === 'drop');
const csvCell = s => (/[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);

function exportCsv() {
  const rows = dropList();
  if (!rows.length) { alert(t('nothingMarked')); return; }
  const lines = rows.map(p => [p.u, p.link, state.unfollowed[p.u] ? t('exportDone') : t('exportPending')].map(csvCell).join(','));
  const csv = '﻿' + [t('exportHeader'), ...lines].join('\r\n') + '\r\n';
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = `rensa_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// --- Events -----------------------------------------------------------------

const list = document.getElementById('list');
let hoverTimer, lastPos = '';

// mousemove instead of mouseover: Chrome fires synthetic mouseover when rows move under a still
// cursor (after a re-render or scroll), which would steal the selection from the keyboard.
list.addEventListener('mousemove', e => {
  const pos = e.screenX + ',' + e.screenY;
  if (pos === lastPos) return;
  lastPos = pos;
  lastInput = 'mouse';
  const u = e.target.closest('li[data-u]')?.dataset.u;
  clearTimeout(hoverTimer);
  if (u && u !== state.current && !run) hoverTimer = setTimeout(() => select(u), HOVER_DELAY);
});
list.addEventListener('mouseleave', () => clearTimeout(hoverTimer));

list.addEventListener('click', e => {
  const li = e.target.closest('li[data-u]');
  if (!li) return;
  const act = e.target.closest('[data-act]')?.dataset.act;
  select(li.dataset.u);
  if (act) decide(li.dataset.u, act);
});

// Expired or blocked profile pictures fall back to the initial.
list.addEventListener('error', e => {
  if (e.target.tagName !== 'IMG') return;
  const span = document.createElement('span');
  span.className = 'av';
  span.textContent = (e.target.closest('li')?.dataset.u?.[0] || '?').toUpperCase();
  e.target.replaceWith(span);
}, true);

document.addEventListener('keydown', e => {
  if (e.target.matches?.('input, select, textarea') || e.metaKey || e.ctrlKey || e.altKey || !state.people.length) return;
  const k = e.key.toLowerCase();
  if (k === 'arrowdown' || k === 'j') { lastInput = 'keys'; step(1); }
  else if (k === 'arrowup' || k === 'k') { lastInput = 'keys'; step(-1); }
  else if (k === 'a') decide(state.current, 'keep', { advance: lastInput === 'keys' });
  else if (k === 'd') decide(state.current, 'drop', { advance: lastInput === 'keys' });
  else if (k === 'u' || k === 'backspace') clear(state.current);
  else if (k === 'n') {
    lastInput = 'keys';
    const i = indexOf(state.current);
    const open = p => matches(p) && p.following && !state.decisions[p.u] && !state.unfollowed[p.u];
    const next = state.people.find((p, j) => j > i && open(p)) || state.people.find(open);
    if (next) select(next.u, { scroll: true });
  } else return;
  e.preventDefault();
});

document.getElementById('tabs').onclick = e => {
  const k = e.target.closest('[data-list]')?.dataset.list;
  if (!k) return;
  state.list = k;
  save(); render();
};
document.getElementById('stats').onclick = e => {
  const b = e.target.closest('.tile');
  if (!b) return;
  if (b.dataset.list) state.list = state.list === 'done' ? 'non' : 'done';
  else {
    if (state.list === 'done') state.list = 'non';
    state.filter = state.filter === b.dataset.filter ? 'all' : b.dataset.filter;
  }
  save(); render();
};
document.getElementById('run').onclick = startRun;
document.getElementById('sync').onclick = () => syncFromInstagram();
document.getElementById('empty-sync').onclick = () => syncFromInstagram();
document.getElementById('avatar').onerror = e => { e.target.hidden = true; };
document.getElementById('stop').onclick = () => { if (run) run.stop = true; };
document.getElementById('export').onclick = exportCsv;
document.getElementById('settings-toggle').onclick = () => {
  const s = document.getElementById('settings');
  s.hidden = !s.hidden;
  document.getElementById('settings-toggle').classList.toggle('on', !s.hidden);
};
document.getElementById('delay').oninput = e => {
  const v = Math.round(+e.target.value);
  if (e.target.value === '' || !Number.isFinite(v)) return;
  state.settings.delay = Math.min(3600, Math.max(0, v));
  save(); render();
};
document.getElementById('delay').onchange = e => { e.target.value = state.settings.delay; };
document.getElementById('max').onchange = e => {
  const v = Math.round(+e.target.value);
  state.settings.max = Math.min(500, Math.max(1, Number.isFinite(v) && v > 0 ? v : 50));
  save(); render();
};
document.getElementById('lang').onclick = () => {
  state.lang = state.lang === 'sv' ? 'en' : 'sv';
  document.getElementById('status').hidden = true;
  save(); render();
};
document.getElementById('q').oninput = render;
document.getElementById('filter').onchange = e => { state.filter = e.target.value; save(); render(); };

// The toolbar button asks an already open app to sync.
chrome.runtime?.onMessage?.addListener(msg => { if (msg?.type === 'sync-now') syncFromInstagram(); });

load();
if (!state.current || indexOf(state.current) < 0) state.current = state.people.find(matches)?.u || null;
render();
if (window.chrome?.windows) placeAppWindow().catch(() => {}).then(() => syncFromInstagram());
