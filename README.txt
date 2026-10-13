# KarpfenLog v2 – App-Paket

## Dateien
- `index.html`: App-Oberfläche und Funktionen
- `manifest.webmanifest`: Installationsmetadaten für kompatible Browser
- `service-worker.js`: Offline-Caching des App-Grundgerüsts

## Lokaler Betrieb
Öffne `index.html` in einem aktuellen Browser. Für PWA-Installation und Service Worker wird eine HTTPS-Adresse benötigt, z. B. GitHub Pages.

## Veröffentlichung über GitHub Pages
1. Lege ein öffentliches GitHub-Repository an.
2. Lade alle drei Dateien aus diesem Ordner in das Repository-Hauptverzeichnis hoch.
3. In Settings → Pages wähle die Bereitstellung von `Deploy from a branch`, Branch `main`, Ordner `/(root)`.
4. Öffne die von GitHub Pages angezeigte URL.

## Daten und Synchronisierung
Diese Version speichert Daten lokal in `localStorage` auf dem jeweiligen Gerät. Exportiere regelmäßig das vollständige JSON-Backup. Es gibt noch keine geräteübergreifende Cloud-Synchronisierung und keine native App-Store-Veröffentlichung. Für Synchronisierung braucht es einen Backend-Dienst, Authentifizierung, Konfliktbehandlung und Tests; nicht einfach dieselbe URL auf zwei Geräten zu öffnen.

## Wetter
Wetterabruf verwendet die öffentliche Open-Meteo-API. Internet und Koordinaten oder Standortfreigabe erforderlich. Luftdruck ist modellierter Luftdruck auf Meereshöhe; Wassertemperatur muss manuell gemessen werden. Wetterwerte sind editierbar.

## Datenmigration
Beim ersten Start versucht die App, ältere lokale KarpfenLog-v1-Einträge aus dem selben Browserprofil zu übernehmen, sofern in v2 noch keine Einträge oder Gewässer existieren. Trotzdem vorher nach Möglichkeit ein Backup der alten Version exportieren.
