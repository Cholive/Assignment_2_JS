const menuToggle = document.querySelector('#menu-button')
const closeToggle = document.querySelector('#close-button')
const menu =document.querySelector('#menu')
  menuToggle.addEventListener('click', function(event){
       menu.className = 'menu-open'
    })
  closeToggle.addEventListener('click', function(event){
      menu.className = 'menu-close'
    })