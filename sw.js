var C='el3-v1';
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
 var r=e.request;
 if(r.method!=='GET'||r.url.indexOf('data.json')>-1||r.url.indexOf('api.github.com')>-1)return;
 e.respondWith(fetch(r).then(function(res){var c=res.clone();caches.open(C).then(function(x){x.put(r,c)});return res}).catch(function(){return caches.match(r).then(function(m){return m||caches.match('./')})}));
});
