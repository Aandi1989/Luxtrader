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

//BildSlider
let sliders = document.querySelectorAll('._swiper');
if(sliders){
    for(let index = 0; index <sliders.length; index++){
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')){
            let slider_items = slider.children;
            if(slider_items){
                for(let index = 0; index < slider_items.length; index++){
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if(slider.classList.contains('_gallery')){
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params){}

let main_slider = new Swiper('.mainSlider__body',{
    observer:true,
    observeParents:true,
    slidesPerView:1,
    spaceBetween:0,
    // autoHeight:true,
    speed:800,
    loop:true,
    
    navigation:{
        nextEl:'.controlMainSlider__arrow_next',
        prevEl:'.controlMainSlider__arrow_prev',
    },
    breakpoints:{
        320:{
            autoHeight:true, /*определяются при загрузке страницы и при изменении */ 
        },                   /*ширины экрана могут не сработать до обновления страницы*/ 
        768:{
            autoHeight:false, 
        }
    }
})

// window.addEventListener('resize',function(){
//     main_slider.update()
//     /*должно было вылечить плавную работу breakpoints но не помогло */
// })
//------------
