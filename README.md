# 📊 Zeiterfassung TeachRacoon - GitHub Edition

Eine moderne Zeiterfassungs-App für Lehrer mit automatischer Synchronisation über GitHub.

## 🌟 Features

- ⏱️ **Zeiterfassung** mit Kategorien und Projekten
- ✅ **To-Do Liste** mit Prioritäten und Fälligkeitsdaten
- 📊 **Dashboard** mit Wochenstatistiken und Übersichten
- 💾 **GitHub-Synchronisation** - Daten werden automatisch in deinem Repository gespeichert
- 📱 **Mobile-optimiert** mit responsivem Design
- 📥 **Excel-Export** für Zeiteinträge und To-Dos
- 🎨 **Moderne UI** mit Animationen und Farbverläufen

## 🚀 Einrichtung

### Schritt 1: GitHub Repository erstellen

1. Gehe zu [GitHub](https://github.com) und melde dich an
2. Klicke auf das **+** Symbol oben rechts und wähle **"New repository"**
3. Gib einen Repository-Namen ein (z.B. `zeiterfassung`)
4. Wähle **Public** oder **Private** (Private ist empfohlen für persönliche Daten)
5. Aktiviere **"Add a README file"**
6. Klicke auf **"Create repository"**

### Schritt 2: Personal Access Token erstellen

1. Gehe zu **GitHub Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
   - Direkter Link: https://github.com/settings/tokens
2. Klicke auf **"Generate new token"** → **"Generate new token (classic)"**
3. Gib dem Token einen Namen (z.B. "Zeiterfassung App")
4. Wähle als Ablaufdatum **"No expiration"** (oder ein langes Datum)
5. Aktiviere folgende Berechtigungen:
   - ✅ **repo** (alle Optionen darunter)
6. Klicke auf **"Generate token"**
7. **WICHTIG:** Kopiere den Token sofort und speichere ihn sicher! Er wird nur einmal angezeigt.

### Schritt 3: App konfigurieren

1. Öffne die Datei `Zeiterfassung_GitHub.html` in einem Texteditor
2. Suche nach diesem Abschnitt (ca. Zeile 280):

```javascript
const GITHUB_CONFIG = {
  owner: 'DEIN_GITHUB_USERNAME',        // z.B. 'maxmustermann'
  repo: 'DEIN_REPOSITORY_NAME',          // z.B. 'zeiterfassung'
  token: 'DEIN_PERSONAL_ACCESS_TOKEN',   // z.B. 'ghp_xxxxxxxxxxxx'
  dataFile: 'data.json',                 // Name der JSON-Datei
  branch: 'main'                         // Normalerweise 'main' oder 'master'
};
```

3. Ersetze die Platzhalter:
   - `DEIN_GITHUB_USERNAME` → Dein GitHub-Benutzername
   - `DEIN_REPOSITORY_NAME` → Der Name deines Repositories
   - `DEIN_PERSONAL_ACCESS_TOKEN` → Der Token aus Schritt 2
   
**Beispiel:**
```javascript
const GITHUB_CONFIG = {
  owner: 'maxmustermann',
  repo: 'zeiterfassung',
  token: 'ghp_1234567890abcdefghijklmnopqrstuvwxyz',
  dataFile: 'data.json',
  branch: 'main'
};
```

### Schritt 4: Dateien hochladen

1. Lade die Datei `data.json` in dein GitHub Repository hoch:
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf **"Add file"** → **"Upload files"**
   - Lade die `data.json` Datei hoch
   - Klicke auf **"Commit changes"**

2. Die HTML-Datei kannst du:
   - **Lokal verwenden:** Öffne `Zeiterfassung_GitHub.html` direkt im Browser
   - **Auf GitHub Pages hosten:** (siehe unten)
   - **Auf einem Webserver hosten**

### Schritt 5: GitHub Pages aktivieren (optional)

Um die App online verfügbar zu machen:

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **"Settings"** → **"Pages"**
3. Unter "Source" wähle **"main"** branch
4. Klicke auf **"Save"**
5. Lade die `Zeiterfassung_GitHub.html` als `index.html` hoch
6. Nach wenigen Minuten ist deine App unter `https://DEIN_USERNAME.github.io/DEIN_REPO_NAME/` erreichbar

## 📱 Nutzung

### Zeiterfassung
1. Wähle das Datum und die Zeiten aus
2. Wähle eine Kategorie (Unterricht, Vorbereitung, etc.)
3. Optional: Füge ein Projekt und eine Beschreibung hinzu
4. Klicke auf "Hinzufügen"
5. Die Daten werden automatisch auf GitHub gespeichert!

### To-Do Liste
1. Erstelle neue Aufgaben mit Priorität
2. Setze optional ein Fälligkeitsdatum
3. Markiere Aufgaben als erledigt
4. Exportiere deine To-Dos nach Excel

### Dashboard
- Sieh deine Wochenstatistiken
- Verfolge den Fortschritt zum Gesamtziel
- Analysiere die Zeitverteilung nach Kategorien

## 🔒 Sicherheitshinweise

**WICHTIG:** Da das Personal Access Token im Code gespeichert wird, solltest du:

1. ✅ Das Repository als **Private** markieren
2. ✅ Den Token regelmäßig erneuern
3. ✅ Die HTML-Datei NIEMALS öffentlich teilen
4. ✅ Nur Lese- und Schreibrechte für das spezifische Repository vergeben

**Für maximale Sicherheit:**
- Verwende die App nur lokal auf deinem Computer
- Oder erstelle ein Backend mit Server-seitigem Token-Management

## 🛠️ Technische Details

### Dateistruktur
```
dein-repo/
├── data.json              # Alle Zeiteinträge und To-Dos
├── index.html             # Die App (umbenannte Zeiterfassung_GitHub.html)
└── README.md              # Diese Anleitung
```

### Synchronisation
- **Beim Start:** Daten werden von GitHub geladen
- **Beim Speichern:** Daten werden automatisch auf GitHub hochgeladen
- **Fallback:** Bei Fehlern werden Daten lokal im Browser gespeichert

### Lokale Backups
Die App erstellt automatisch Backups im Browser-LocalStorage als Fallback.

## 🐛 Fehlerbehebung

### "GitHub nicht konfiguriert"
→ Überprüfe, ob du die Platzhalter in `GITHUB_CONFIG` ersetzt hast

### "401 Unauthorized"
→ Dein Token ist ungültig oder abgelaufen. Erstelle einen neuen Token

### "404 Not Found"
→ Repository-Name oder Branch-Name ist falsch

### "Fehler beim Speichern"
→ Überprüfe die Token-Berechtigungen (muss `repo` Zugriff haben)

### Daten werden nicht synchronisiert
1. Öffne die Browser-Konsole (F12)
2. Suche nach Fehlermeldungen
3. Überprüfe die GitHub-Konfiguration
4. Stelle sicher, dass `data.json` im Repository existiert

## 📊 Export-Funktionen

### Excel-Export
- Klicke auf "Excel Export" in der Zeiterfassung oder To-Do-Ansicht
- Alle Daten werden in einer strukturierten Excel-Datei exportiert
- Perfekt für Berichte oder Archivierung

## 🎨 Anpassungen

Du kannst die App anpassen:
- **Kategorien:** Ändere die `categories` Array (Zeile ~440)
- **Wochenziel:** Ändere `weeklyHours` in `SCHOOL_YEAR` (Zeile ~430)
- **Farben:** Passe die Farben in den Style-Definitionen an

## 📄 Lizenz

Frei verwendbar für persönliche und kommerzielle Zwecke.

## 🤝 Support

Bei Fragen oder Problemen:
1. Überprüfe die Fehlerbehebung oben
2. Schaue in die Browser-Konsole (F12) für detaillierte Fehlermeldungen
3. Prüfe, ob alle Schritte der Einrichtung befolgt wurden

---

**Viel Erfolg mit deiner Zeiterfassung! 🎉**
