(function(){var d=document.documentElement,l=localStorage.getItem('lang')||d.lang;
function set(x){d.lang=x;d.dir=x=='ar'?'rtl':'ltr';localStorage.setItem('lang',x);var b=document.getElementById('lang');if(b)b.textContent=x=='ar'?'English':'عربي'}
set(l);document.addEventListener('click',function(e){if(e.target.id=='lang')set(d.lang=='ar'?'en':'ar')});
var f=document.querySelector('form');if(f)f.addEventListener('submit',function(e){if(f.action.indexOf('YOUR_FORM_ID')>-1){e.preventDefault();document.getElementById('ok').hidden=false}})})();