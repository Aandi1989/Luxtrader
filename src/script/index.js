let userIcon = document.querySelector('.userHeader__icon')
userIcon.addEventListener('click', function(e){
    let userMenu = document.querySelector('.userHeader__menu');
    userMenu.classList.toggle('_active');
})

document.documentElement.addEventListener('click', function(e){
    if(!e.target.closest('.userHeader')){
        let userMenu = document.querySelector('.userHeader__menu');
        userMenu.classList.remove('_active')
    }
});

let iconMenu = document.querySelector('.iconMenu')
let menuBody = document.querySelector('.menu__body')
iconMenu.addEventListener('click', function(e){
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active')
})


// ibg function
function ibg(){
let ibg=document.querySelectorAll("._ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();
//-----------------
