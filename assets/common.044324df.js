function i(t){let e=t[0];for(let n=1;n<t.length;n++){const o=t[n];o.length>e.length&&(e=o)}return e}function a(t,e){return Array.from(t).filter(s=>e.test(s.nodeName))}function l(t,e){let n,o,s=0;return function(){n=this,o=arguments;let r=new Date().valueOf();r-s>e&&(t.apply(n,o),s=r)}}const f=t=>{t.forEach(e=>{const n=new Image;n.src=e})};export{i as a,a as f,f as p,l as t};
