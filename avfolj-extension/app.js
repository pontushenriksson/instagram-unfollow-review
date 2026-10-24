const KEY = 'ig-avfolj-granskning-v1';
const PREVIEW_W = 460;
const HOVER_DELAY = 200;

// --- Texts ------------------------------------------------------------------

const TEXT = {
  sv: {
    title: 'Avfölj-granskning',
    saved: 'Sparat {t}',
    saveFailed: 'Kunde inte spara',
    listNon: 'Följer inte tillbaka ({n})',
    listAll: 'Alla jag följer ({n})',
    listMutual: 'Följer tillbaka ({n})',
    listFollowers: 'Mina följare ({n})',
    followsYou: 'Följer dig', notFollowing: 'Du följer inte',
    fAll: 'Alla', fTodo: 'Obesvarade', fDrop: 'Avfölj', fKeep: 'Behåll', fDone: 'Avföljda',
    search: 'Sök användarnamn',
    keep: 'Behåll', drop: 'Avfölj', done: 'Avföljd', failed: 'Misslyckades',
    stDrop: 'avfölj', stKeep: 'behåll', stTodo: 'obesvarade', stDone: 'avföljda', stTotal: 'i listan',
    run: 'Avfölj markerade ({n})',
    export: 'Exportera', copy: 'Kopiera länkar', import: 'Importera', settings: 'Inställningar',
    hover: 'Håll musen över ett namn så visas profilen i förhandsfönstret.',
    keys: 'A behåll · D avfölj (namnet du pekar på) · ↑/↓ bläddra · U rensa val · N nästa obesvarade',
    noMatches: 'Inga träffar',
    nothingMarked: 'Inga konton är markerade som Avfölj.',
    copied: '{n} länkar kopierade',
    emptyTitle: 'Hämta från Instagram',
    emptyIntro: 'Vilka du följer och dina följare hämtas automatiskt från kontot du är inloggad på i Chrome. Är du inte inloggad: logga in på instagram.com i förhandsfönstret som öppnas och klicka sedan Hämta.',
    fileImport: 'Importera en fil i stället',
    sync: 'Hämta från Instagram', refresh: 'Uppdatera', syncing: 'Hämtar…',
    checking: 'Kollar vilket konto som är inloggat på Instagram…',
    fetchingFollowing: 'Hämtar vilka du följer: {n} av {total}',
    fetchingFollowers: 'Hämtar dina följare: {n} av {total}',
    synced: 'Hämtade {following} konton du följer och {followers} följare för @{u}.',
    syncLoggedOut: 'Du är inte inloggad på Instagram. Logga in i förhandsfönstret och klicka Hämta.',
    syncFailed: 'Kunde inte hämta från Instagram: {e}',
    rateLimited: 'Instagram ber dig vänta (för många förfrågningar). Försök igen om en stund.',
    accountMeta: '{followers} följare · {following} följer',
    syncedAt: 'hämtat {t}',
    accountSwitched: 'Inloggad som @{u}. Valen sparas separat för varje konto.',
    notSynced: 'inte hämtat än',
    emptySteps: [
      'Öppna Instagram → Inställningar → Kontocenter → Din information och behörigheter → Ladda ned din information.',
      'Välj ditt Instagram-konto → Viss information → kryssa bara i <b>Följare och följer</b>.',
      'Välj <b>Ladda ned till enhet</b>, format <b>JSON</b>, tidsperiod <b>Hela tiden</b>.',
      'Instagram mejlar när filen är klar. Ladda ned zip-filen.',
      'Välj zip-filen här nedanför. Det går också att välja <code>following.json</code> och <code>followers_1.json</code> eller en CSV med användarnamn.',
    ],
    pick: 'Välj filer',
    dropHint: 'eller dra och släpp dem här',
    privacy: 'Allt hämtas via din egen inloggning och sparas bara lokalt i din webbläsare. Inget skickas någon annanstans.',
    imported: 'Importerade {following} konton du följer och {followers} följare.',
    importedNoFollowers: 'Importerade {following} konton du följer. Följarfilen saknades, så "Följer inte tillbaka" kan inte räknas ut. Ta med followers_1.json.',
    importedCsv: 'Importerade {n} konton från CSV.',
    importNone: 'Hittade inga konton i filerna. Välj zip-filen från Instagram eller following.json och followers_1.json.',
    zip64: 'Zip-filen är för stor för att läsas direkt. Packa upp den och välj following.json och followers_1.json.',
    importFailed: 'Kunde inte läsa {f}: {e}',
    delay: 'Paus mellan avföljningar (sekunder)',
    max: 'Max antal per körning',
    limitNote: 'Instagram begränsar hur många konton man får avfölja per timme och dygn, och gränserna är inte offentliga. Går man över kan kontot tillfälligt spärras från att följa och avfölja. Kör hellre flera små omgångar än en stor. Automatiserade åtgärder kan strida mot Instagrams villkor.',
    confirmRun: 'Avfölja {n} konton nu?\n\nEtt konto var {s}:e sekund, ungefär {m} min. Låt båda fönstren vara öppna och var inloggad på Instagram i förhandsfönstret.',
    nothingToRun: 'Det finns inga markerade konton kvar att avfölja.',
    running: 'Avföljer {i} av {n}: @{u}',
    waiting: '{i} av {n} klara ({ok} avföljda). Nästa om {s} s.',
    finished: 'Klart. {ok} avföljda, {fail} misslyckades.',
    stopped: 'Stoppad. {ok} avföljda, {fail} misslyckades.',
    blocked: 'Instagram verkar ha begränsat ditt konto ("Försök igen senare"). Körningen stoppades. Vänta innan du kör igen.',
    loggedOut: 'Du är inte inloggad på Instagram i förhandsfönstret. Logga in där och starta igen.',
    tooManyErrors: 'Tre fel i rad, körningen stoppades. Kolla förhandsfönstret: är du inloggad och ser profilen ut som vanligt?',
    stop: 'Stoppa',
    exportHeader: 'Användarnamn,Länk,Status',
    exportDone: 'Avföljd', exportPending: 'Ej avföljd',
    previewError: 'Kunde inte visa profilen: {e}',
    otherLang: 'English',
  },
  en: {
    title: 'Unfollow Review',
    saved: 'Saved {t}',
    saveFailed: 'Could not save',
    listNon: "Don't follow back ({n})",
    listAll: 'Everyone I follow ({n})',
    listMutual: 'Follow back ({n})',
    listFollowers: 'My followers ({n})',
    followsYou: 'Follows you', notFollowing: "You don't follow",
    fAll: 'All', fTodo: 'Undecided', fDrop: 'Unfollow', fKeep: 'Keep', fDone: 'Unfollowed',
    search: 'Search username',
    keep: 'Keep', drop: 'Unfollow', done: 'Unfollowed', failed: 'Failed',
    stDrop: 'unfollow', stKeep: 'keep', stTodo: 'undecided', stDone: 'unfollowed', stTotal: 'in list',
    run: 'Unfollow marked ({n})',
    export: 'Export', copy: 'Copy links', import: 'Import', settings: 'Settings',
    hover: 'Hover over a name to show the profile in the preview window.',
    keys: 'A keep · D unfollow (the name you point at) · ↑/↓ browse · U clear · N next undecided',
    noMatches: 'No matches',
    nothingMarked: 'No accounts are marked as Unfollow.',
    copied: '{n} links copied',
    emptyTitle: 'Fetch from Instagram',
    emptyIntro: 'Who you follow and your followers are fetched automatically from the account you are logged in to in Chrome. Not logged in? Log in to instagram.com in the preview window that opens, then click Fetch.',
    fileImport: 'Import a file instead',
    sync: 'Fetch from Instagram', refresh: 'Refresh', syncing: 'Fetching…',
    checking: 'Checking which account is logged in to Instagram…',
    fetchingFollowing: 'Fetching who you follow: {n} of {total}',
    fetchingFollowers: 'Fetching your followers: {n} of {total}',
    synced: 'Fetched {following} accounts you follow and {followers} followers for @{u}.',
    syncLoggedOut: 'You are not logged in to Instagram. Log in in the preview window and click Fetch.',
    syncFailed: 'Could not fetch from Instagram: {e}',
    rateLimited: 'Instagram asks you to wait (too many requests). Try again in a while.',
    accountMeta: '{followers} followers · {following} following',
    syncedAt: 'fetched {t}',
    accountSwitched: 'Logged in as @{u}. Choices are saved separately for each account.',
    notSynced: 'not fetched yet',
    emptySteps: [
      'Open Instagram → Settings → Accounts Center → Your information and permissions → Download your information.',
      'Pick your Instagram account → Some of your information → tick only <b>Followers and following</b>.',
      'Choose <b>Download to device</b>, format <b>JSON</b>, date range <b>All time</b>.',
      'Instagram emails you when the file is ready. Download the zip file.',
      'Pick the zip file below. You can also pick <code>following.json</code> and <code>followers_1.json</code>, or a CSV of usernames.',
    ],
    pick: 'Choose files',
    dropHint: 'or drag and drop them here',
    privacy: 'Everything is fetched through your own login and stored only locally in your browser. Nothing is sent anywhere else.',
    imported: 'Imported {following} accounts you follow and {followers} followers.',
    importedNoFollowers: 'Imported {following} accounts you follow. The followers file was missing, so "Don\'t follow back" cannot be worked out. Include followers_1.json.',
    importedCsv: 'Imported {n} accounts from CSV.',
    importNone: 'Found no accounts in the files. Pick the zip file from Instagram, or following.json and followers_1.json.',
    zip64: 'The zip file is too large to read directly. Unzip it and pick following.json and followers_1.json.',
    importFailed: 'Could not read {f}: {e}',
    delay: 'Pause between unfollows (seconds)',
    max: 'Max per run',
    limitNote: 'Instagram limits how many accounts you can unfollow per hour and day, and the limits are not public. Going over can temporarily block your account from following and unfollowing. Prefer several small runs over one big one. Automated actions may go against Instagram\'s terms.',
    confirmRun: 'Unfollow {n} accounts now?\n\nOne account every {s} seconds, about {m} min. Keep both windows open and stay logged in to Instagram in the preview window.',
    nothingToRun: 'There are no marked accounts left to unfollow.',
    running: 'Unfollowing {i} of {n}: @{u}',
    waiting: '{i} of {n} done ({ok} unfollowed). Next in {s} s.',
    finished: 'Done. {ok} unfollowed, {fail} failed.',
    stopped: 'Stopped. {ok} unfollowed, {fail} failed.',
    blocked: 'Instagram seems to have limited your account ("Try again later"). The run was stopped. Wait before running again.',
    loggedOut: 'You are not logged in to Instagram in the preview window. Log in there and start again.',
    tooManyErrors: 'Three errors in a row, the run was stopped. Check the preview window: are you logged in and does the profile look normal?',
    stop: 'Stop',
    exportHeader: 'Username,Link,Status',
    exportDone: 'Unfollowed', exportPending: 'Not unfollowed',
    previewError: 'Could not show the profile: {e}',
    otherLang: 'Svenska',
  },
};

function t(key, vars = {}) {
  const s = TEXT[state.lang]?.[key] ?? TEXT.en[key] ?? key;
  return typeof s === 'string' ? s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '') : s;
}

// --- State ------------------------------------------------------------------

// people: [{ u, link, name, following, followsBack: true | false | null }]
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

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!saved) return;
    const isV1 = saved.people && !saved.list; // first version only had a not-following-back list
    state = { ...state, ...saved, settings: { ...state.settings, ...saved.settings } };
    state.unfollowed ||= {};
    state.failed ||= {};
    if (isV1) {
      state.lang = 'sv';
      state.list = 'non';
      state.people = state.people.map(p => ({ u: p.u, link: p.link, following: true, followsBack: false }));
    }
  } catch (e) {}
}

function save() {
  const el = document.getElementById('saved');
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    el.textContent = t('saved', { t: new Date().toLocaleTimeString(state.lang === 'sv' ? 'sv-SE' : undefined) });
  } catch (e) {
    el.textContent = t('saveFailed');
  }
}

const profileUrl = u => `https://www.instagram.com/${encodeURIComponent(u)}/`;

// --- Import -----------------------------------------------------------------

// Minimal zip reader: only the central directory and the few entries we need are read,
// so a large export is never loaded into memory as a whole.
async function zipEntries(file) {
  const tailSize = Math.min(file.size, 65557);
  const tail = new DataView(await file.slice(file.size - tailSize).arrayBuffer());
  let eocd = -1;
  for (let i = tail.byteLength - 22; i >= 0; i--) {
    if (tail.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error('not a zip file');
  const count = tail.getUint16(eocd + 10, true);
  const cdSize = tail.getUint32(eocd + 12, true);
  const cdOffset = tail.getUint32(eocd + 16, true);
  if (count === 0xffff || cdOffset === 0xffffffff) throw new Error('zip64');
  const cd = new DataView(await file.slice(cdOffset, cdOffset + cdSize).arrayBuffer());
  const entries = [];
  for (let p = 0, k = 0; k < count && cd.getUint32(p, true) === 0x02014b50; k++) {
    const nameLen = cd.getUint16(p + 28, true);
    entries.push({
      name: new TextDecoder().decode(new Uint8Array(cd.buffer, p + 46, nameLen)),
      method: cd.getUint16(p + 10, true),
      size: cd.getUint32(p + 20, true),
      offset: cd.getUint32(p + 42, true),
    });
    p += 46 + nameLen + cd.getUint16(p + 30, true) + cd.getUint16(p + 32, true);
  }
  return entries;
}

async function zipText(file, e) {
  const head = new DataView(await file.slice(e.offset, e.offset + 30).arrayBuffer());
  const start = e.offset + 30 + head.getUint16(26, true) + head.getUint16(28, true);
  const blob = file.slice(start, start + e.size);
  if (e.method === 0) return blob.text();
  if (e.method === 8) return new Response(blob.stream().pipeThrough(new DecompressionStream('deflate-raw'))).text();
  throw new Error('unsupported compression');
}

const baseName = n => n.split('/').pop().toLowerCase();
function exportKind(name) {
  const b = baseName(name);
  if (/^following\.(json|html)$/.test(b)) return 'following';
  if (/^followers(_\d+)?\.(json|html)$/.test(b)) return 'followers';
  return null;
}

function nameFromHref(href) {
  try {
    const parts = new URL(href).pathname.split('/').filter(Boolean).filter(s => s !== '_u');
    return parts[0] || null;
  } catch (e) { return null; }
}

// Handles both export layouts: older files keep the username in string_list_data[].value,
// newer following.json keeps it in "title" with an /_u/ link.
function namesFromJson(data) {
  const out = [];
  const walk = node => {
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node.string_list_data)) {
      for (const s of node.string_list_data) {
        const u = s.value || node.title || nameFromHref(s.href || '');
        if (u) out.push(u);
      }
      return;
    }
    Object.values(node).forEach(walk);
  };
  walk(data);
  return out;
}

function namesFromHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return [...doc.querySelectorAll('a[href*="instagram.com/"]')].map(a => nameFromHref(a.href)).filter(Boolean);
}

const parseExportFile = (name, text) => (name.toLowerCase().endsWith('.html') ? namesFromHtml(text) : namesFromJson(JSON.parse(text)));

async function importFiles(files) {
  const found = { following: new Set(), followers: new Set() };
  let foundAny = { following: false, followers: false };
  const csvTexts = [];
  for (const file of files) {
    try {
      if (/\.zip$/i.test(file.name)) {
        for (const e of await zipEntries(file)) {
          const kind = exportKind(e.name);
          if (!kind) continue;
          parseExportFile(e.name, await zipText(file, e)).forEach(u => found[kind].add(u.toLowerCase()));
          foundAny[kind] = true;
        }
      } else if (/\.csv$/i.test(file.name)) {
        csvTexts.push(await file.text());
      } else {
        const kind = exportKind(file.name);
        if (!kind) continue;
        parseExportFile(file.name, await file.text()).forEach(u => found[kind].add(u.toLowerCase()));
        foundAny[kind] = true;
      }
    } catch (e) {
      alert(e.message === 'zip64' ? t('zip64') : t('importFailed', { f: file.name, e: e.message }));
      return;
    }
  }

  if (found.following.size || found.followers.size) {
    const hasFollowers = foundAny.followers;
    // Everyone you follow plus every follower, so both sides can be listed.
    state.people = [...new Set([...found.following, ...found.followers])].sort().map(u => ({
      u, link: profileUrl(u), following: found.following.has(u), followsBack: hasFollowers ? found.followers.has(u) : null,
    }));
    state.list = !found.following.size ? 'followers' : hasFollowers ? 'non' : 'all';
    setStatus(hasFollowers
      ? t('imported', { following: found.following.size, followers: found.followers.size })
      : t('importedNoFollowers', { following: found.following.size }));
  } else if (csvTexts.length) {
    const people = csvTexts.flatMap(peopleFromCsv);
    if (!people.length) { alert(t('importNone')); return; }
    state.people = people;
    state.list = 'non';
    setStatus(t('importedCsv', { n: people.length }));
  } else {
    alert(t('importNone'));
    return;
  }
  state.filter = 'all';
  state.current = state.people.find(matches)?.u || null;
  save();
  render();
}

function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  text = text.replace(/^﻿/, '');
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(r => r.some(x => x.trim()));
}

// CSV of accounts that don't follow back: username, optional link, optional "Ja"/"Nej" (yes = unfollow).
function peopleFromCsv(text) {
  const rows = parseCsv(text);
  if (rows.length && /user|användar/i.test(rows[0][0])) rows.shift();
  return rows.map(r => {
    const u = r[0].trim().replace(/^@/, '');
    const v = (r[2] || '').trim().toLowerCase();
    if (u && !state.decisions[u]) {
      if (v === 'ja' || v === 'yes') state.decisions[u] = 'drop';
      else if (v === 'nej' || v === 'no') state.decisions[u] = 'keep';
    }
    return { u, link: (r[1] || '').trim() || profileUrl(u), following: true, followsBack: false };
  }).filter(p => p.u);
}

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

// Waits until the content script in the preview tab reports that the given profile has loaded.
async function waitForProfile(tabId, u, ms = 25000) {
  const end = Date.now() + ms;
  while (Date.now() < end && !run?.stop) {
    try {
      const r = await chrome.tabs.sendMessage(tabId, { type: 'ping' });
      if (r?.path?.startsWith('/accounts/login')) return 'logged-out';
      if (firstSegment(r?.path) === u.toLowerCase()) return 'ready';
    } catch (e) {} // content script not loaded yet
    await sleep(500);
  }
  return 'timeout';
}

async function unfollowOne(p) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const tabId = await openPreview(p.link);
    wantedUrl = p.link;
    const ready = await waitForProfile(tabId, p.u);
    if (ready === 'logged-out') return { status: 'logged-out' };
    if (ready !== 'ready') return { status: 'error', detail: 'timeout' };
    await sleep(1000);
    try {
      return await chrome.tabs.sendMessage(tabId, { type: 'unfollow', username: p.u });
    } catch (e) {
      if (attempt) return { status: 'error', detail: e.message }; // page navigated mid-call, retry once
    }
  }
}

// --- Fetch from Instagram ---------------------------------------------------

let syncing = false;
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
    for (const u of r.data?.users || []) users.push({ u: u.username, name: u.full_name || '' });
    setStatus(t(kind === 'following' ? 'fetchingFollowing' : 'fetchingFollowers', { n: users.length, total: total ?? '?' }));
    maxId = r.data?.next_max_id;
    if (!maxId) return users;
    await sleep(PAGE_PAUSE);
  }
}

// Choices are stored per Instagram account, so logging in to another account never mixes lists.
function switchAccount(me) {
  if (state.account?.id === me.id) return false;
  try {
    if (state.account) localStorage.setItem(`${KEY}:acct:${state.account.id}`, JSON.stringify(state));
  } catch (e) {}
  let stored = null;
  try { stored = JSON.parse(localStorage.getItem(`${KEY}:acct:${me.id}`) || 'null'); } catch (e) {}
  // Data from before accounts were tracked (CSV or file import) is adopted by the first account.
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

// Checks who is logged in. Fetches the lists when there is no data for that account yet, or when forced.
async function syncFromInstagram({ force = false } = {}) {
  if (run || syncing) return;
  syncing = true;
  render();
  try {
    setStatus(t('checking'));
    const tabId = await instagramTab();
    const me = await ask(tabId, { type: 'whoami' });
    if (!me?.loggedIn) { setStatus(t('syncLoggedOut')); return; }
    const switched = switchAccount(me);
    applyAccount(me);
    save();
    render();
    if (!force && state.account.syncedAt) {
      if (switched) setStatus(t('accountSwitched', { u: me.username }));
      return;
    }
    const following = await fetchList(tabId, me, 'following');
    const followers = await fetchList(tabId, me, 'followers');
    mergePeople(following, followers);
    state.account.syncedAt = Date.now();
    state.account.following = following.length;
    state.account.followers = followers.length;
    save();
    setStatus(t('synced', { following: following.length, followers: followers.length, u: me.username || me.id }));
  } catch (e) {
    setStatus(t('syncFailed', { e: e.message }));
  } finally {
    syncing = false;
    render();
  }
}

function mergePeople(following, followers) {
  const names = new Map([...following, ...followers].map(x => [x.u, x.name]));
  const fol = new Set(following.map(x => x.u));
  const fan = new Set(followers.map(x => x.u));
  state.people = [...names.keys()].sort().map(u => ({ u, link: profileUrl(u), name: names.get(u), following: fol.has(u), followsBack: fan.has(u) }));
  if (!state.people.some(p => p.u === state.current)) state.current = state.people.find(matches)?.u || null;
}

async function countdown(seconds, i, n) {
  for (let s = seconds; s > 0 && !run.stop; s--) {
    setRunText(t('waiting', { i, n, ok: run.ok, s }));
    await sleep(1000);
  }
}

function setRunText(text) { document.getElementById('run-text').textContent = text; }

async function startRun() {
  if (run || syncing) return;
  const targets = state.people.filter(p => state.decisions[p.u] === 'drop' && !state.unfollowed[p.u]).slice(0, state.settings.max);
  if (!targets.length) { alert(t('nothingToRun')); return; }
  const n = targets.length;
  if (!confirm(t('confirmRun', { n, s: state.settings.delay, m: Math.ceil(n * (state.settings.delay + 8) / 60) }))) return;

  run = { stop: false, ok: 0, fail: 0, errorsInRow: 0 };
  render();
  let message = null;
  for (let i = 0; i < n && !run.stop; i++) {
    const p = targets[i];
    setRunText(t('running', { i: i + 1, n, u: p.u }));
    markCurrent(p.u, true);
    const res = (await unfollowOne(p)) || { status: 'error' };
    if (res.status === 'ok' || res.status === 'not-following') {
      state.unfollowed[p.u] = Date.now();
      delete state.failed[p.u];
      run.ok++;
      run.errorsInRow = 0;
    } else if (res.status === 'blocked') { message = t('blocked'); break; }
    else if (res.status === 'logged-out') { message = t('loggedOut'); break; }
    else {
      state.failed[p.u] = res.detail || res.status;
      run.fail++;
      if (res.status !== 'missing' && ++run.errorsInRow >= 3) { message = t('tooManyErrors'); break; }
    }
    save();
    render();
    // Only wait after an actual unfollow; skipped and missing profiles cost Instagram nothing.
    if (res.status === 'ok' && i < n - 1) await countdown(state.settings.delay, i + 1, n);
  }
  const summary = t(run.stop || message ? 'stopped' : 'finished',{ ok: run.ok, fail: run.fail });
  run = null;
  save();
  render();
  setStatus(message ? `${message} ${summary}` : summary);
  if (message) alert(message);
}

// --- Selection and decisions ------------------------------------------------

const q = () => document.getElementById('q').value.trim().toLowerCase().replace(/^@/, '');
function inList(p) {
  if (state.list === 'all') return p.following;
  if (state.list === 'followers') return p.followsBack === true;
  if (state.list === 'mutual') return p.following && p.followsBack === true;
  return p.following && p.followsBack === false;
}
function matches(p) {
  if (!inList(p)) return false;
  const d = state.decisions[p.u];
  const done = !!state.unfollowed[p.u];
  if (state.filter === 'todo' && (d || done || !p.following)) return false;
  if (state.filter === 'drop' && (d !== 'drop' || done)) return false;
  if (state.filter === 'keep' && d !== 'keep') return false;
  if (state.filter === 'done' && !done) return false;
  const s = q();
  return !s || p.u.toLowerCase().includes(s) || (p.name || '').toLowerCase().includes(s);
}
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

function renderStaticText() {
  document.documentElement.lang = state.lang;
  document.title = t('title');
  const set = (id, key) => { document.getElementById(id).textContent = t(key); };
  set('title', 'title');
  set('lang', 'otherLang');
  set('export', 'export');
  set('copy', 'copy');
  set('import', 'import');
  set('settings-toggle', 'settings');
  set('stop', 'stop');
  set('delay-label', 'delay');
  set('max-label', 'max');
  set('limit-note', 'limitNote');
  set('empty-title', 'emptyTitle');
  set('pick', 'pick');
  set('drop-hint', 'dropHint');
  set('privacy', 'privacy');
  set('empty-intro', 'emptyIntro');
  set('file-import', 'fileImport');
  set('hint', 'keys');
  document.getElementById('empty-steps').innerHTML = t('emptySteps').map(s => `<li>${s}</li>`).join('');
  document.getElementById('q').placeholder = t('search');
  for (const id of ['delay', 'max']) {
    const el = document.getElementById(id);
    if (document.activeElement !== el) el.value = state.settings[id];
  }
}

function renderAccount() {
  const a = state.account;
  const box = document.getElementById('account');
  box.hidden = !a?.username;
  const sync = document.getElementById('sync');
  sync.textContent = syncing ? t('syncing') : state.people.length ? t('refresh') : t('sync');
  sync.disabled = syncing || !!run;
  document.getElementById('empty-sync').textContent = syncing ? t('syncing') : t('sync');
  document.getElementById('empty-sync').disabled = syncing || !!run;
  if (!a?.username) return;
  const img = document.getElementById('avatar');
  if (a.picture && img.dataset.src !== a.picture) { img.hidden = false; img.dataset.src = a.picture; img.src = a.picture; }
  document.getElementById('acct-user').textContent = '@' + a.username;
  document.getElementById('acct-name').textContent = a.fullName || '';
  const when = a.syncedAt ? t('syncedAt', { t: new Date(a.syncedAt).toLocaleString(state.lang === 'sv' ? 'sv-SE' : undefined, { dateStyle: 'short', timeStyle: 'short' }) }) : t('notSynced');
  const meta = a.followers != null ? t('accountMeta', { followers: a.followers, following: a.following }) + ' · ' : '';
  document.getElementById('acct-meta').textContent = meta + when;
}

function render() {
  renderStaticText();
  renderAccount();
  const hasData = state.people.length > 0;
  document.getElementById('empty').hidden = hasData;
  for (const id of ['main', 'actions', 'list', 'hint']) document.getElementById(id).hidden = !hasData;
  document.getElementById('runbox').hidden = !run;
  if (!hasData) return;

  const counts = { all: 0, non: 0, followers: 0, mutual: 0 };
  for (const p of state.people) {
    if (p.followsBack === true) counts.followers++;
    if (!p.following) continue;
    counts.all++;
    if (p.followsBack === false) counts.non++;
    if (p.followsBack === true) counts.mutual++;
  }
  const lists = [['all', 'listAll'], ['non', 'listNon'], ['followers', 'listFollowers'], ['mutual', 'listMutual']]
    .filter(([k]) => k === 'all' || counts[k] || state.list === k);
  document.getElementById('list-select').innerHTML = lists.map(([k, key]) => `<option value="${k}">${esc(t(key, { n: counts[k] }))}</option>`).join('');
  document.getElementById('list-select').value = state.list;
  document.getElementById('filter').innerHTML = [['all', 'fAll'], ['todo', 'fTodo'], ['drop', 'fDrop'], ['keep', 'fKeep'], ['done', 'fDone']]
    .map(([k, key]) => `<option value="${k}">${esc(t(key))}</option>`).join('');
  document.getElementById('filter').value = state.filter;

  let drop = 0, keep = 0, done = 0, total = 0, actionable = 0;
  for (const p of state.people) {
    if (!inList(p)) continue;
    total++;
    if (!p.following) continue;
    actionable++;
    const d = state.decisions[p.u];
    if (state.unfollowed[p.u]) done++;
    else if (d === 'drop') drop++;
    else if (d === 'keep') keep++;
  }
  const todo = actionable - drop - keep - done;
  const pct = n => (total ? n / total * 100 : 0);
  document.getElementById('bar').innerHTML =
    `<span style="width:${pct(done)}%;background:var(--done)"></span>` +
    `<span style="width:${pct(drop)}%;background:var(--drop)"></span>` +
    `<span style="width:${pct(keep)}%;background:var(--keep)"></span>`;
  document.getElementById('stats').innerHTML =
    `<span><b>${drop}</b> ${t('stDrop')}</span><span><b>${keep}</b> ${t('stKeep')}</span>` +
    `<span><b>${todo}</b> ${t('stTodo')}</span><span><b>${done}</b> ${t('stDone')}</span><span>${total} ${t('stTotal')}</span>`;

  const pending = state.people.filter(p => state.decisions[p.u] === 'drop' && !state.unfollowed[p.u]).length;
  const runBtn = document.getElementById('run');
  runBtn.textContent = t('run', { n: Math.min(pending, state.settings.max) });
  runBtn.disabled = !!run || syncing || !pending;
  document.getElementById('import').disabled = !!run || syncing;

  const items = visible();
  document.getElementById('list').innerHTML = items.length ? items.map(x => {
    const d = state.decisions[x.u];
    const followsYou = state.list === 'all' && x.followsBack === true ? `<span class="tag">${esc(t('followsYou'))}</span>` : '';
    const right = !x.following
      ? `<span class="tag">${esc(t('notFollowing'))}</span>`
      : state.unfollowed[x.u]
      ? `<span class="tag">${esc(t('done'))}</span>`
      : `${followsYou}${state.failed[x.u] ? `<span class="tag fail" title="${esc(state.failed[x.u])}">${esc(t('failed'))}</span>` : ''}
        <span class="pick">
          <button class="keep ${d === 'keep' ? 'on' : ''}" data-act="keep">${esc(t('keep'))}</button>
          <button class="drop ${d === 'drop' ? 'on' : ''}" data-act="drop">${esc(t('drop'))}</button>
        </span>`;
    const name = x.name ? ` <small>${esc(x.name)}</small>` : '';
    return `<li data-u="${esc(x.u)}" class="${x.u === state.current ? 'cur' : ''}"><span class="u">@${esc(x.u)}${name}</span>${right}</li>`;
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
  a.download = `unfollow_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

async function copyLinks() {
  const rows = dropList();
  if (!rows.length) { alert(t('nothingMarked')); return; }
  await navigator.clipboard.writeText(rows.map(p => p.link).join('\n'));
  setStatus(t('copied', { n: rows.length }));
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

const fileInput = document.getElementById('file');
document.getElementById('pick').onclick = () => fileInput.click();
document.getElementById('import').onclick = () => fileInput.click();
fileInput.onchange = async () => {
  if (fileInput.files.length) await importFiles([...fileInput.files]);
  fileInput.value = '';
};
document.addEventListener('dragover', e => { e.preventDefault(); document.body.classList.add('dragging'); });
document.addEventListener('dragleave', e => { if (!e.relatedTarget) document.body.classList.remove('dragging'); });
document.addEventListener('drop', e => {
  e.preventDefault();
  document.body.classList.remove('dragging');
  if (!run && e.dataTransfer.files.length) importFiles([...e.dataTransfer.files]);
});

document.getElementById('run').onclick = startRun;
document.getElementById('sync').onclick = () => syncFromInstagram({ force: true });
document.getElementById('empty-sync').onclick = () => syncFromInstagram({ force: true });
document.getElementById('avatar').onerror = e => { e.target.hidden = true; };
document.getElementById('stop').onclick = () => { if (run) run.stop = true; };
document.getElementById('export').onclick = exportCsv;
document.getElementById('copy').onclick = copyLinks;
document.getElementById('settings-toggle').onclick = () => {
  const s = document.getElementById('settings');
  s.hidden = !s.hidden;
};
document.getElementById('delay').onchange = e => {
  state.settings.delay = Math.min(3600, Math.max(15, Math.round(+e.target.value) || 60));
  save(); render();
};
document.getElementById('max').onchange = e => {
  state.settings.max = Math.min(500, Math.max(1, Math.round(+e.target.value) || 50));
  save(); render();
};
document.getElementById('lang').onclick = () => {
  state.lang = state.lang === 'sv' ? 'en' : 'sv';
  document.getElementById('status').hidden = true;
  save(); render();
};
document.getElementById('q').oninput = render;
document.getElementById('list-select').onchange = e => { state.list = e.target.value; save(); render(); };
document.getElementById('filter').onchange = e => { state.filter = e.target.value; save(); render(); };

load();
if (!state.current || indexOf(state.current) < 0) state.current = state.people.find(matches)?.u || null;
render();
if (window.chrome?.windows) placeAppWindow().catch(() => {}).then(() => syncFromInstagram());
