# Avfölj-granskning för Instagram

Ett Chrome-tillägg som visar vilka du följer på Instagram som inte följer dig tillbaka. Du ser profilerna genom att hålla musen över namnen, markerar vilka du vill behålla eller avfölja och låter sedan tillägget avfölja dem i lugnt tempo.

*English below.*

## Funktioner

- **Tre listor** från din egen Instagram-export: *Följer inte tillbaka*, *Alla jag följer* och *Följer tillbaka*.
- **Förhandsvisning med musen.** Håll musen över ett namn så öppnas profilen i ett litet fönster bredvid listan. Du behöver inte öppna några flikar, och eftersom du är inloggad där syns privata konton också.
- **Behåll eller avfölj** med knappar på varje rad eller med tangenterna `A` och `D`. Filtrera på obesvarade, avfölj, behåll och avföljda.
- **Autosparning.** Alla val sparas lokalt i webbläsaren.
- **Avfölj markerade.** Tillägget går igenom de markerade profilerna en i taget i förhandsfönstret och klickar *Följer → Sluta följa*. Du ställer in paus och maxantal per körning. Körningen stoppas direkt om Instagram visar "Försök igen senare", om du inte är inloggad eller vid tre fel i rad.
- **Export** av avfölj-listan som CSV (användarnamn, länk, status), eller kopiera länkarna.
- Svenska och engelska.

## Installera

1. Ladda ned repot (*Code → Download ZIP*) och packa upp det, eller kör `git clone`.
2. Öppna `chrome://extensions` i Chrome och slå på **Utvecklarläge** uppe till höger.
3. Klicka **Läs in okomprimerat** och välj mappen `avfolj-extension`. Du kan också dra mappen till sidan.
4. Fäst tillägget via pusselikonen och klicka på det. Appen öppnas i ett eget fönster.

Låt mappen ligga kvar. Chrome läser tillägget därifrån.

## Hämta din data från Instagram

1. Instagram → Inställningar → Kontocenter → Din information och behörigheter → **Ladda ned din information**.
2. Välj ditt konto → **Viss information** → kryssa bara i **Följare och följer**.
3. **Ladda ned till enhet**, format **JSON**, tidsperiod **Hela tiden**.
4. När Instagram mejlar att filen är klar laddar du ned zip-filen och väljer den i tillägget.

Det går också att välja `following.json` och `followers_1.json` direkt, HTML-varianten av exporten, eller en CSV med användarnamn i första kolumnen.

## Integritet

All data läses och sparas lokalt i din webbläsare (`localStorage`). Tillägget skickar ingenting någonstans och använder inga API:er från Instagram. Det öppnar bara vanliga profilsidor i ett fönster, precis som när du själv klickar.

## Risker

Instagram begränsar hur många konton man får följa och avfölja per timme och dygn. Gränserna är inte offentliga. Går man över kan kontot tillfälligt spärras från att följa och avfölja. Automatiserade åtgärder kan också strida mot Instagrams villkor. Kör hellre flera små omgångar än en stor. Du använder tillägget på egen risk.

Avföljningen hittar knapparna på profilsidan via deras text (svenska och engelska). Ändrar Instagram sin sida kan den sluta fungera. Då stoppas körningen efter tre fel i rad.

## Filer

| Fil | Vad den gör |
|---|---|
| `avfolj-extension/manifest.json` | Tilläggets manifest (Manifest V3) |
| `avfolj-extension/background.js` | Öppnar appfönstret när du klickar på ikonen |
| `avfolj-extension/app.html`, `app.js` | Appen: import, listor, förhandsvisning, avföljning, export |
| `avfolj-extension/content.js` | Körs på instagram.com och klickar *Sluta följa* när appen ber om det |

---

## English

A Chrome extension that shows who you follow on Instagram that doesn't follow you back. Hover over names to preview profiles in a small side window, mark who to keep or unfollow, and let the extension unfollow them at a slow pace.

**Install:** download or clone this repo, open `chrome://extensions`, turn on **Developer mode**, click **Load unpacked** and pick the `avfolj-extension` folder. Pin the extension and click it.

**Data:** in Instagram go to Settings → Accounts Center → Your information and permissions → **Download your information** → Some of your information → **Followers and following**, format **JSON**. Pick the downloaded zip file in the extension. Everything stays in your browser.

**Risks:** Instagram limits how many accounts you can unfollow per hour and day, and the limits are not public. Going over can temporarily block your account from following and unfollowing, and automated actions may go against Instagram's terms. Keep runs small. Use at your own risk.

The UI language follows your browser (Swedish or English) and can be switched in the app.

## Licens / License

[MIT](LICENSE)
