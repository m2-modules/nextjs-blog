const CACHE_NAME = 'offline'
const OFFLINE_URL = 'offline.html'

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }))
    })()
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse
          if (preloadResponse) return preloadResponse

          const networkResponse = await fetch(event.request)
          return networkResponse
        } catch (e) {
          console.log('Fetch failed; returning offline page instead.', e)

          const cache = await caches.open(CACHE_NAME)
          return cache.match(OFFLINE_URL)
        }
      })()
    )
  }
})
