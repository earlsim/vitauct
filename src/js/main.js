import Swiper from 'swiper';
let swiper9th = new Swiper('.swiper-9ka', {
    speed: 600,
    slidesPerView: 6,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
let swiperPlants = new Swiper('.plants-slider-container', {
    speed: 600,
    slidesPerView: 3.5,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
let swiperCertificate = new Swiper('.sertificate-slider', {
   speed:600,
   slidesPerView: 5,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});