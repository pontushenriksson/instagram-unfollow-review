# Avfölj-granskning för Instagram

Ett Chrome-tillägg som visar vilka du följer på Instagram som inte följer dig tillbaka. Du ser profilerna genom att hålla musen över namnen, markerar vilka du vill behålla eller avfölja och låter sedan tillägget avfölja dem i lugnt tempo.

*English below.*

## Funktioner

- **Hämtar automatiskt** vilka du följer och dina följare från kontot du är inloggad på i Chrome. Du ser vilket konto det är (namn, bild, antal följare) och kan uppdatera med en knapp.
- **Fyra listor:** *Alla jag följer*, *Följer inte tillbaka*, *Mina följare* och *Följer tillbaka*. I *Mina följare* märks de du själv inte följer.
- **Flera konton.** Loggar du in på ett annat Instagram-konto sparas valen separat för varje konto.
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

## Så hämtas datan

När appen öppnas går förhandsfönstret till instagram.com och kollar vilket konto som är inloggat. Första gången hämtas listorna automatiskt, sedan när du klickar **Uppdatera**. Är du inte inloggad loggar du in i förhandsfönstret och klickar **Hämta från Instagram**.

Hämtningen använder samma läsanrop som instagram.com gör när du själv öppnar dina listor *Följare* och *Följer*, 50 konton per anrop med en kort paus emellan. Den körs i din egen inloggade session. Inga lösenord eller cookies hanteras av tillägget.

**Importera fil i stället:** det går fortfarande att använda Instagrams dataexport (Kontocenter → Din information och behörigheter → Ladda ned din information → Följare och följer, format JSON). Välj zip-filen, `following.json` och `followers_1.json`, eller en CSV med användarnamn i första kolumnen.

## Integritet

All data sparas lokalt i din webbläsare (`localStorage`). Tillägget pratar bara med instagram.com, via din egen inloggning i förhandsfönstret, och skickar ingenting någon annanstans. `content.js` tillåter bara läsanrop för kontoinfo och listorna *Följare*/*Följer*.

## Risker

Instagram begränsar hur många konton man får följa och avfölja per timme och dygn. Gränserna är inte offentliga. Går man över kan kontot tillfälligt spärras från att följa och avfölja. Automatiserade åtgärder kan också strida mot Instagrams villkor. Kör hellre flera små omgångar än en stor. Du använder tillägget på egen risk.

Hämtningen bygger på Instagrams interna webbanrop och avföljningen hittar knapparna på profilsidan via deras text (svenska och engelska). Ändrar Instagram något av det kan funktionen sluta fungera. Avföljningen stoppas då efter tre fel i rad.

## Filer

| Fil | Vad den gör |
|---|---|
| `avfolj-extension/manifest.json` | Tilläggets manifest (Manifest V3) |
| `avfolj-extension/background.js` | Öppnar appfönstret när du klickar på ikonen |
| `avfolj-extension/app.html`, `app.js` | Appen: hämtning, import, listor, förhandsvisning, avföljning, export |
| `avfolj-extension/content.js` | Körs på instagram.com: läser inloggat konto och listor, klickar *Sluta följa* när appen ber om det |

---

## English

A Chrome extension that shows who you follow on Instagram that doesn't follow you back. Hover over names to preview profiles in a small side window, mark who to keep or unfollow, and let the extension unfollow them at a slow pace.

**Install:** download or clone this repo, open `chrome://extensions`, turn on **Developer mode**, click **Load unpacked** and pick the `avfolj-extension` folder. Pin the extension and click it.

**Data:** who you follow and your followers are fetched automatically from the Instagram account you are logged in to in Chrome, using the same read requests instagram.com makes when you open your Followers/Following lists. The app shows which account is logged in and keeps choices separate per account. Importing Instagram's data export (zip/JSON) or a CSV still works. Everything stays in your browser.

**Lists:** Everyone I follow, Don't follow back, My followers, Follow back.

**Risks:** Instagram limits how many accounts you can unfollow per hour and day, and the limits are not public. Going over can temporarily block your account from following and unfollowing, and automated actions may go against Instagram's terms. Keep runs small. Use at your own risk.

The UI language follows your browser (Swedish or English) and can be switched in the app.

## Licens / License

[MIT](LICENSE)
