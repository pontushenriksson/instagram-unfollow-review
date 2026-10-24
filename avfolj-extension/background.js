// Toolbar button opens the app in its own window, or focuses it if already open.
chrome.action.onClicked.addListener(async () => {
  const url = chrome.runtime.getURL('app.html');
  const [ctx] = await chrome.runtime.getContexts({ contextTypes: ['TAB'], documentUrls: [url] });
  if (ctx) {
    await chrome.windows.update(ctx.windowId, { focused: true });
    return;
  }
  await chrome.windows.create({ url, type: 'popup', width: 620, height: 900 });
});
