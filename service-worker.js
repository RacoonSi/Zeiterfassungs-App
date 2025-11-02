const CACHE_NAME = 'zeiterfassung-zsl-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];

// Installation - Cache erstellen
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installation gestartet');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache geöffnet');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Service Worker: Cache-Fehler', error);
      })
  );
  self.skipWaiting();
});

// Aktivierung - Alte Caches löschen
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Aktivierung');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Alten Cache löschen', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch - Offline-First-Strategie
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          (response) => {
            // Prüfen ob gültige Response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Response klonen für Cache
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // Fallback wenn offline und nicht im Cache
          return new Response('Offline - Bitte Internetverbindung prüfen', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Background Sync (optional für zukünftige Features)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-time-entries') {
    console.log('Service Worker: Background Sync');
    // Hier könnten Daten synchronisiert werden
  }
});

// Push Notifications (optional für zukünftige Features)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Neue Benachrichtigung',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('Zeiterfassung ZSL', options)
  );
});
