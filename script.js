const navItems=document.querySelectorAll('.nav-item');
const views=document.querySelectorAll('.view');
const pageTitle=document.getElementById('pageTitle');
const sidebar=document.querySelector('.sidebar');
const menuToggle=document.getElementById('menuToggle');
const titles={
  'command-center':'Command Center','projects':'Proyectos','workspace':'Workspace',
  'plan-reader':'Plan Reader AI','takeoff':'Takeoff','products':'Product Intelligence',
  'submittals':'Submittals','library':'Biblioteca técnica'
};
navItems.forEach(item=>item.addEventListener('click',()=>{
  const target=item.dataset.view;
  navItems.forEach(button=>button.classList.remove('active'));
  item.classList.add('active');
  views.forEach(view=>view.classList.toggle('active',view.id===target));
  pageTitle.textContent=titles[target]||'Nexeron';
  sidebar.classList.remove('open');
}));
menuToggle.addEventListener('click',()=>sidebar.classList.toggle('open'));
