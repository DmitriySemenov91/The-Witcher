let mySwiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
      breakpoints: {
        540: {
          slidesPerView: 2,
        }
      }
    
});

let menuButton = document.querySelector('.menu_button');
let menu = document.querySelector('.header');
menuButton.addEventListener('click', function (){
    menuButton.classList.toggle('menu_button_active');
    menu.classList.toggle('header_active');
})