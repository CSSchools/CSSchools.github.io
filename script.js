const box=document.querySelector('#site-search');
if(box){
  box.addEventListener('input',()=>{
    const q=box.value.trim().toLowerCase();
    document.querySelectorAll('[data-search]').forEach(el=>{
      el.hidden=q && !el.dataset.search.toLowerCase().includes(q);
    });
  });
}
