(function(){
  var lb=document.querySelector('.lb'); if(!lb) return;
  var links=[].slice.call(document.querySelectorAll('a[data-cap]')), i=0, last=null;
  var img=lb.querySelector('img'), cap=lb.querySelector('figcaption');
  function show(k){ i=(k+links.length)%links.length; var a=links[i]; img.src=a.getAttribute('href'); img.alt=a.getAttribute('data-cap')||''; cap.textContent=a.getAttribute('data-cap')||''; }
  function open(k){ last=document.activeElement; show(k); lb.hidden=false; document.body.style.overflow='hidden'; lb.querySelector('.lb-x').focus(); }
  function close(){ lb.hidden=true; img.removeAttribute('src'); document.body.style.overflow=''; if(last) last.focus(); }
  links.forEach(function(a,k){ a.addEventListener('click',function(ev){ ev.preventDefault(); open(k); }); });
  lb.querySelector('.lb-x').addEventListener('click',close);
  lb.querySelector('.lb-p').addEventListener('click',function(){show(i-1);});
  lb.querySelector('.lb-n').addEventListener('click',function(){show(i+1);});
  lb.addEventListener('click',function(e){ if(e.target===lb) close(); });
  lb.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); else if(e.key==='ArrowLeft') show(i-1); else if(e.key==='ArrowRight') show(i+1); });
})();
