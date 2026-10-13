const CACHE='karpfenlog-v6-shell';
const ASSETS=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/service-worker.js')){
    event.respondWith((async()=>{try{const response=await fetch(event.request,{cache:'no-store'});if(response&&response.ok&&url.pathname.endsWith('/index.html')){const cache=await caches.open(CACHE);cache.put('./index.html',response.clone())}return response}catch(error){return (await caches.match(event.request))||(await caches.match('./index.html'))}})());
  } else {
    event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).catch(()=>caches.match('./index.html'))));
  }
});
