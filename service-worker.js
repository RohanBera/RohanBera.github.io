"use strict";var precacheConfig=[["/index.html","fece55ef719e1846a555823fd22f1022"],["/static/css/main.36e4a75a.css","c41667cb1b928df732b917c5455f2893"],["/static/js/0.aa267c71.chunk.js","9dbcf1f09695d317fe3c1d7af3e2af40"],["/static/js/main.54135471.js","c391d401afdf979b8822a544e83ba404"],["/static/media/GreenHostel-vma2y.dc2a9bde.ttf","dc2a9bde9d73f4e11258410bdef41425"],["/static/media/Lato-Light.2fe27d9d.ttf","2fe27d9d10cdfccb1baef28a45d5ba90"],["/static/media/NineteenNinetyThree-L1Ay.1505008f.ttf","1505008fcbe74cc54b1eef9ad3bc78ee"],["/static/media/SamarkanNormal-Gg5D.8107f8b7.ttf","8107f8b787a40a84fbf3ee220abd84aa"],["/static/media/aboutme.f7d119b5.gif","f7d119b5592351755059ce8845d9601e"],["/static/media/anime.36e80ec0.png","36e80ec0e409ae25d21156f5f74b701c"],["/static/media/apache.12c49354.svg","12c493545aad44a15818e8186537df88"],["/static/media/bmazon.95abfe46.png","95abfe4697aa3ec19a261f9a4bd691bf"],["/static/media/c.65aa0b06.svg","65aa0b061fe9bf7f1f17b975e3958298"],["/static/media/cheese.7dfdb891.png","7dfdb891c51fe5b1505babf158ae9b1d"],["/static/media/dart.9da33b05.svg","9da33b058bf8980a407c2cd6840d0b91"],["/static/media/express.53051603.svg","530516030e26a09ac38473bd5d8eff0e"],["/static/media/firebase.bfa69c4f.svg","bfa69c4f3255d5c564c2ec600ff9885e"],["/static/media/flutter.f2e3fb32.svg","f2e3fb32c6ba7935f07f050f1782afd6"],["/static/media/github.0255bf2c.svg","0255bf2cd6e42c2fdbe2e189e418929f"],["/static/media/java.a732a6e5.svg","a732a6e5bc69653a55d6dd81ab8d2d5e"],["/static/media/latex.c1bdb951.svg","c1bdb951367e9e5561ce1adc85d13411"],["/static/media/linux.2e82d079.svg","2e82d079f8bc66df87636c7bb8f8ab7c"],["/static/media/mongodb.2aa7f7b5.svg","2aa7f7b569fd6e9176f49dd31eaa970e"],["/static/media/mysql.dd2a5a35.svg","dd2a5a358ea682bed45bf98bc842b3ed"],["/static/media/nirmaan.0021006e.jpeg","0021006e73bd3739a6552d298bde4bbd"],["/static/media/nodejs.94cafb0d.svg","94cafb0d1b4a2875215db17964f0938a"],["/static/media/note1.a2f02d4e.wav","a2f02d4e6e9d225ebf4e554c0fc9b36b"],["/static/media/note2.1760f931.wav","1760f9313cae8fa1564e9091c58cdcf4"],["/static/media/note3.ec817347.wav","ec8173470a0186fdecf2f6935260eb56"],["/static/media/note4.7817b629.wav","7817b629210c6d879b493439bcded62b"],["/static/media/note5.69f4c1dd.wav","69f4c1dd58b17a67a632ed106f203afc"],["/static/media/note6.c713df4b.wav","c713df4bb4bb1b6b11d041d97387d959"],["/static/media/note7.bf1ffa77.wav","bf1ffa7743bbdfdca078cb3f6d80bb77"],["/static/media/old-paper.40c5f97e.png","40c5f97e25bd2492a6c8fe2ef0882541"],["/static/media/php.fa78b345.svg","fa78b345d39deeca1ac3460695e9b426"],["/static/media/pydiva.18faf7d8.png","18faf7d8f17a78099bbb18683a97c548"],["/static/media/python.51c2eab2.svg","51c2eab22c8994e70e7633979982b451"],["/static/media/r.b6acb39c.png","b6acb39cf5dd238ce179325f52c49907"],["/static/media/react.9a28da9f.svg","9a28da9f2a3fa419eb399e49f98cda39"],["/static/media/rohan.c8d617ed.jpeg","c8d617edcc24de3080ce614bb06ae6e6"],["/static/media/rohan_duck.b3c3c556.jpeg","b3c3c5560dfce51915108782773dc27a"],["/static/media/sort.d9b5176d.png","d9b5176d882ccc45c7e62fb4b583583a"],["/static/media/vams.c4372ef2.jpeg","c4372ef2630696f51f8b629884daa646"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});