if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(l(...s),a)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/actions-296af49a.js",revision:null},{url:"assets/actions-2a13c71f.js",revision:null},{url:"assets/actions-c90d95eb.js",revision:null},{url:"assets/constants-a400ef56.js",revision:null},{url:"assets/dialog-a900aeca.js",revision:null},{url:"assets/ErrorBoundary-41c5a4a5.js",revision:null},{url:"assets/index-0644b24f.js",revision:null},{url:"assets/index-11985c64.js",revision:null},{url:"assets/index-251be3e9.js",revision:null},{url:"assets/index-37c2939a.css",revision:null},{url:"assets/index-3c1099bb.js",revision:null},{url:"assets/index-4a480edc.js",revision:null},{url:"assets/index-55e8bac8.css",revision:null},{url:"assets/index-5b7e78c2.js",revision:null},{url:"assets/index-61365623.js",revision:null},{url:"assets/index-f86e2731.js",revision:null},{url:"assets/MemberList-23b208d8.js",revision:null},{url:"assets/NewTask-a69a638d.js",revision:null},{url:"assets/Notfound-8e61b13d.js",revision:null},{url:"assets/ProjectContainer-ecff9e77.js",revision:null},{url:"assets/ProjectList-cd0f9ccc.js",revision:null},{url:"assets/ProtectedRoute-cb3b8e4f.js",revision:null},{url:"assets/TaskDetailsContainer-e2bfdeca.js",revision:null},{url:"assets/transition-ba2ea7d2.js",revision:null},{url:"assets/use-text-value-63d35185.js",revision:null},{url:"index.html",revision:"aabac8375c808a9c3cbf9411f928553a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"62d6ef9e0984fdc6728b981c057673e8"},{url:"favicon-16x16.png",revision:"ad38aabf97fddd7d5d6614d71874caba"},{url:"favicon-32x32.png",revision:"70a6255cf518fe0396672f7c3a895583"},{url:"pwa1.png",revision:"0049bd7dd85765dab440101c38565ce1"},{url:"pwa512.png",revision:"fedd3b0c27548a252e192b0451262cb9"},{url:"manifest.webmanifest",revision:"1f3a90a519cfcdf5b723ab6ccfd2ffaa"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
