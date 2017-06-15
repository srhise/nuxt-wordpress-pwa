importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.fe03f0bbe62e1b7637d4.js",
    "revision": "dccf80f8b9f363b56ed7b6c727419741"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.8ecb81d6164e513dec8e.js",
    "revision": "f5168f0defc3e95f0f053dad8ceed70d"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.2b48f8f95116e7ff918d.js",
    "revision": "e5d5fcfd5c804946581d0c59d553af2d"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.90e1953d933764bbd856.js",
    "revision": "20c00fe1f2cce42404f96ea54abc6e7b"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.ead6c8e708d96dda3468.js",
    "revision": "b19194ab28b77b0158c541bf908f1f1c"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "b7eaa7fb7cd366f4e576e8eb6e425919"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.40f29c2e.json",
    "revision": "1236d15be4764198f3c1a68667140062"
  },
  {
    "url": "/_nuxt/manifest.4de84894a2736415c2c7.js",
    "revision": "d074f4fe22eb6c559fe06a0e614f6f41"
  },
  {
    "url": "/_nuxt/nuxt.bundle.1151a21679d5b7ee9706.js",
    "revision": "3b41054fc9148bf926dd4c30eaa5fce7"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "333ae234fb23d59c5de7e5eb512fc4d2"
  },
  {
    "url": "/_nuxt/vendor.bundle.dd03905ccd938eb021a4.js",
    "revision": "903ce38e8e9939a375564c51b3804651"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
