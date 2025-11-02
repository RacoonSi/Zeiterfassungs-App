# 📱 Zeiterfassung ZSL - Installation als PWA

## Was ist eine PWA?
Eine Progressive Web App (PWA) ist eine Web-App, die sich wie eine native App verhält:
- ✅ Kann auf dem Homescreen installiert werden
- ✅ Funktioniert offline
- ✅ Öffnet sich im Vollbild ohne Browser-Leiste
- ✅ Schnelle Ladezeiten durch Caching

## 🚀 Installation auf Android

### Methode 1: Über Chrome Browser
1. Öffnen Sie Chrome auf Ihrem Android-Handy
2. Laden Sie die Datei `index.html` auf einen Webserver hoch (siehe unten)
3. Öffnen Sie die URL im Chrome Browser
4. Tippen Sie auf das Menü (⋮) oben rechts
5. Wählen Sie **"App installieren"** oder **"Zum Startbildschirm hinzufügen"**
6. Bestätigen Sie mit **"Installieren"**
7. Die App erscheint jetzt auf Ihrem Homescreen! 🎉

### Methode 2: Installation über Edge/Firefox
1. Öffnen Sie den Browser Ihrer Wahl
2. Navigieren Sie zur App-URL
3. Tippen Sie auf das Menü
4. Wählen Sie **"Zum Startbildschirm hinzufügen"**

## 🍎 Installation auf iOS (iPhone/iPad)

1. Öffnen Sie **Safari** (wichtig! Nur Safari unterstützt PWA-Installation auf iOS)
2. Navigieren Sie zur App-URL
3. Tippen Sie auf das **Teilen-Symbol** (Quadrat mit Pfeil nach oben)
4. Scrollen Sie nach unten und wählen Sie **"Zum Home-Bildschirm"**
5. Geben Sie einen Namen ein (z.B. "ZSL Zeit")
6. Tippen Sie auf **"Hinzufügen"**
7. Die App erscheint auf Ihrem Homescreen! 🎉

## 🌐 App bereitstellen - Hosting-Optionen

Um die App zu installieren, muss sie auf einem Webserver erreichbar sein. Hier sind einfache Optionen:

### Option A: GitHub Pages (Kostenlos & Einfach) ⭐ EMPFOHLEN
1. Erstellen Sie ein kostenloses GitHub-Konto auf https://github.com
2. Erstellen Sie ein neues Repository (z.B. "zeiterfassung-zsl")
3. Laden Sie alle Dateien aus diesem Ordner hoch:
   - index.html
   - manifest.json
   - service-worker.js
   - icon-192.png
   - icon-512.png
4. Gehen Sie zu Settings → Pages
5. Wählen Sie Branch "main" und Ordner "/ (root)"
6. Ihre App ist jetzt unter `https://IhrUsername.github.io/zeiterfassung-zsl` erreichbar!

### Option B: Netlify Drop (Kostenlos & Super Einfach)
1. Gehen Sie zu https://app.netlify.com/drop
2. Ziehen Sie alle Dateien in den Browser
3. Fertig! Sie erhalten sofort eine URL

### Option C: Vercel (Kostenlos)
1. Gehen Sie zu https://vercel.com
2. Registrieren Sie sich kostenlos
3. Klicken Sie auf "New Project"
4. Laden Sie die Dateien hoch
5. Ihre App wird automatisch deployed

### Option D: Lokaler Webserver (Zum Testen)
1. Installieren Sie Python (falls noch nicht installiert)
2. Öffnen Sie ein Terminal im App-Ordner
3. Starten Sie einen Server:
   ```bash
   python3 -m http.server 8000
   ```
4. Öffnen Sie im Browser: `http://localhost:8000`
5. Für mobile Geräte: Finden Sie Ihre lokale IP-Adresse und öffnen Sie `http://IHR-IP:8000`

**Hinweis für lokalen Server:** 
- Die PWA-Installation funktioniert nur über HTTPS oder localhost
- Für echte mobile Installation brauchen Sie eine der Cloud-Hosting-Optionen

## 📱 App-Features

Nach der Installation können Sie:
- ✅ Die App offline nutzen
- ✅ Schnell über das App-Icon starten
- ✅ Im Vollbild ohne Browser-Leiste arbeiten
- ✅ Alle Daten werden lokal auf Ihrem Gerät gespeichert
- ✅ Excel-Export der Zeiterfassung
- ✅ To-Do Listen verwalten

## 🔧 Problemlösung

### Die Installation wird nicht angeboten
- Stellen Sie sicher, dass die App über HTTPS aufgerufen wird (oder localhost)
- Prüfen Sie, ob der Service Worker erfolgreich registriert wurde (Browser-Konsole öffnen)
- Auf iOS: Nur Safari unterstützt PWA-Installation

### App funktioniert nicht offline
- Öffnen Sie die App einmal online, damit der Service Worker alle Dateien cached
- Prüfen Sie die Browser-Konsole auf Fehler

### Icons werden nicht angezeigt
- Stellen Sie sicher, dass die PNG-Dateien im gleichen Ordner wie index.html liegen
- Löschen Sie den Browser-Cache und laden Sie die Seite neu

## 📞 Support

Bei Fragen oder Problemen:
1. Öffnen Sie die Browser-Konsole (F12 / Inspect)
2. Schauen Sie nach Fehler-Meldungen
3. Prüfen Sie, ob alle Dateien korrekt hochgeladen wurden

## 🎨 Anpassungen

Sie können die App anpassen:
- **Farben:** Ändern Sie in `manifest.json` die `theme_color` und `background_color`
- **Name:** Ändern Sie in `manifest.json` die Felder `name` und `short_name`
- **Icons:** Ersetzen Sie die PNG-Dateien mit eigenen Icons (Größen beibehalten!)

## ⚡ Updates

Wenn Sie die App aktualisieren:
1. Laden Sie die neuen Dateien auf den Server hoch
2. Ändern Sie in `service-worker.js` die Version: `const CACHE_NAME = 'zeiterfassung-zsl-v2';`
3. Die App wird beim nächsten Öffnen automatisch aktualisiert

---

**Viel Erfolg mit Ihrer neuen App! 🚀**
