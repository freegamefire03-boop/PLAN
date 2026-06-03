const CACHE = 'telc-b1-v2';
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./')))
  );
});

// ── NOTIFICATIONS — TIMER INTERACTION ──────────

function broadcast(type) {
  try {
    const ch = new BroadcastChannel('telc-timer');
    ch.postMessage({ type });
    ch.close();
  } catch {}
}

async function focusOrOpenApp() {
  const url = new URL('./', self.location.href).href;
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  for (const c of clients) {
    if (c.url.startsWith(url) || c.url.includes('index.html')) {
      try { await c.focus(); return; } catch {}
    }
  }
  try {
    await self.clients.openWindow(url);
  } catch {}
}

// User taps the notification body
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(focusOrOpenApp());
});

// User taps an action button (Pause / Resume / Stop)
self.addEventListener('notificationactionclick', e => {
  const action = e.action;
  e.notification.close();
  e.waitUntil((async () => {
    if (action === 'pause' || action === 'resume' || action === 'stop') {
      broadcast(action);
    }
    await focusOrOpenApp();
  })());
});
