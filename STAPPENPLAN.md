# Stappenplan: WK Poul voor weekendjeweg.fun

Totale tijd: ongeveer 30 minuten (sneller dan de eerste keer, want jij weet nu al hoe het werkt).

## Wat je gaat doen

1. Nieuw Firebase project aanmaken (eigen database, los van wksimps.nl)
2. `config.js` aanpassen met de nieuwe gegevens
3. Bestanden uploaden naar je nieuwe GitHub repository
4. GitHub Pages aanzetten
5. Domein weekendjeweg.fun koppelen

---

## Fase 1: Nieuw Firebase project (10 minuten)

### Stap 1.1: Project aanmaken

1. Ga naar https://console.firebase.google.com
2. Log in met je Google account (zelfde als voor wksimps.nl is prima)
3. Klik op **"Project toevoegen"**
4. Naam: bijvoorbeeld `weekendjeweg-poul`
5. Google Analytics: **UIT** (niet aanvinken)
6. Klik op **"Project maken"**
7. Wacht tot het klaar is, klik op **"Doorgaan"**

### Stap 1.2: Firestore database aanzetten

1. Menu links: **Build > Firestore Database**
2. **Database maken**
3. Locatie: **eur3 (europe-west)** of **europe-west1**
4. Modus: **Start in productiemodus**
5. **Maken**

### Stap 1.3: Firestore regels instellen

1. Tabblad **Regels**
2. Wis alles en plak:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. **Publiceren**

### Stap 1.4: Web app registreren

1. Klik op tandwiel (Settings) > **Projectinstellingen**
2. Scroll naar **Your apps**
3. Klik op het web-icoon `</>`
4. Naam: `weekendjeweg-web`
5. **NIET** Firebase Hosting aanvinken
6. Klik op **App registreren**
7. **Houd het venster met de firebaseConfig open**, je hebt deze waardes zo nodig

---

## Fase 2: config.js aanpassen (5 minuten)

1. Open in deze map het bestand `config.js`
2. Vervang de waardes met JE EIGEN Firebase gegevens uit stap 1.4:

```javascript
export const firebaseConfig = {
  apiKey: "AIzaSy...",           // <-- jouw waarde
  authDomain: "weekendjeweg-poul.firebaseapp.com",
  projectId: "weekendjeweg-poul",
  storageBucket: "weekendjeweg-poul.firebasestorage.app",
  messagingSenderId: "...",
  appId: "..."
};
```

3. Pas ook deze regels aan:

```javascript
export const POOL_NAME = "Weekendje Weg WK Poul";  // of een naam die jij verzint
export const ADMIN_PASSWORD = "kies-een-uniek-wachtwoord";  // ANDER dan wksimps.nl!
```

4. **Opslaan** (Ctrl+S)

---

## Fase 3: Naar GitHub uploaden (10 minuten)

### Stap 3.1: Repository klaarzetten

Je hebt al een nieuwe repository aangemaakt voor weekendjeweg.fun.

### Stap 3.2: Alle bestanden uploaden

1. Ga naar je nieuwe GitHub repository
2. Klik op **"Add file" > "Upload files"** (of de link "uploading an existing file")
3. **Selecteer ALLE bestanden** uit deze map:
   - index.html
   - app.js
   - data.js
   - knockout.js
   - autosync.js
   - styles.css
   - config.js (met JOUW gegevens erin!)
   - .nojekyll
4. **Sleep ze allemaal** naar het uploadvak
5. Wacht tot ze geüpload zijn
6. Scroll naar beneden, klik op **"Commit changes"**

> **Tip**: vergeet `.nojekyll` niet (verborgen bestand). In Windows: Beeld > Verborgen items aanvinken. In Mac: Cmd+Shift+. (punt).

### Stap 3.3: GitHub Pages aanzetten

1. In de repository: **Settings > Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main, folder `/ (root)`
4. **Save**
5. Wacht 1-2 minuten

Je site is nu live op `https://pieter2509.github.io/JOUW-REPO-NAAM/`

---

## Fase 4: Domein koppelen (5 minuten + wachten)

### Stap 4.1: DNS bij je domeinprovider

Waar heb je weekendjeweg.fun gekocht? Voeg deze DNS-records toe:

| Recordnaam | Type | Inhoud |
|------------|------|--------|
| weekendjeweg.fun | A | 185.199.108.153 |
| weekendjeweg.fun | A | 185.199.109.153 |
| weekendjeweg.fun | A | 185.199.110.153 |
| weekendjeweg.fun | A | 185.199.111.153 |
| www.weekendjeweg.fun | CNAME | pieter2509.github.io |

### Stap 4.2: GitHub custom domain instellen

1. Settings > Pages
2. **Custom domain**: `weekendjeweg.fun`
3. **Save**
4. Wacht op groen vinkje (15-60 minuten)
5. **Enforce HTTPS** aanvinken

---

## Fase 5: Testen

1. Open je site (eerst via github.io URL als domein nog niet werkt)
2. Klik op **"NIEUW ACCOUNT"**
3. Maak een test-account aan
4. Voorspel een wedstrijd
5. Check of het opslaat

Werkt het? Stuur de link naar je weekendje-weg-vrienden!

---

## Belangrijke verschillen met wksimps.nl

- **Aparte database**: voorspellingen zijn NIET gedeeld met wksimps.nl
- **Apart admin wachtwoord**: kies iets anders dan je andere poul
- **Zelfde code**: alle features werken hetzelfde (knockout, auto-sync, etc.)

## Toekomst-onderhoud

Als ik later updates maak (bug fixes, nieuwe features), moet je ze in **beide** repositories uploaden. Een fix in wksimps.nl werkt niet automatisch ook voor weekendjeweg.fun, en andersom.

## Veel succes!

Bij vragen of problemen: vraag het me gewoon. 🚀
