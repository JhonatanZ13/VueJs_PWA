const CACHE_NAME = "v1_cache_contador_vueJS";
const urlsToCache = [
    "./",
    "./img/icon.png",
    "./img/icon2.png",
    "./index.html",
    "./load.js",
    "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js",
    "./main.js",
    "./manifest.json",
    "./sw.js",
];

self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                () => self.skipWaiting()
            ).catch(
                err => console.log(err)
            )
        )
    )
})

self.addEventListener("activate", e => {
    const cacheWhiteList = [CACHE_NAME]
    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(
                        cacheName => {
                            if(cacheWhiteList.indexOf(cacheName) == -1){
                                return caches.delete(cacheName)
                            }
                        }
                    )
                )
            }
        ).then(
            () => self.clients.claim()
        )
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(
            res => {
                if (res) {
                    return res 
                }
                return fetch(e.request)
            }
        )
    )
})