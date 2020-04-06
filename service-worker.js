importScripts("/precache-manifest.a8c7a81d3c3d43f8c0d1a9e4e2fef85f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// v1

workbox.core.setCacheNameDetails({prefix: "gwt-brisco"});

/*self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});*/

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
    if(msg.data.action == "skipWaiting") {
        self.skipWaiting();
    }
});

