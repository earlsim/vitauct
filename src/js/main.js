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
   pagination: {
        el: '.swiper-pagination-docs',
        clickable: true,
    }
});
let swiperPeople = new Swiper('.people-slider', {
   speed:400,
   slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination--video',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    navigation: {
        nextEl: '.swiper-button-next--people-slider',
        prevEl: '.swiper-button-prev--people-slider',
    }
});

//js-show-more
