let userIcon = document.querySelector('.userHeader__icon')
userIcon.addEventListener('click', function(e){
    let userMenu = document.querySelector('.userHeader__menu');
    userMenu.classList.toggle('_active');
})

let iconMenu = document.querySelector('.iconMenu')
let menuBody = document.querySelector('.menu__body')
iconMenu.addEventListener('click', function(e){
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active')
})
