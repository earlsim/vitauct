import Swiper from 'swiper';
import $ from 'jquery';
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
let swiperBenefits = new Swiper('.benefits__slider', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 26,
    loop: true
});

//legacy :(

$('.js-faq').click( function () {
    $(this).closest('.faq-item').toggleClass('is-active');
    $(this).closest('.faq-item').find('.js-faq-text').toggle(200);
});
$('.js-spl-item').click(function () {

        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
        } else {
            let arr = $(this).closest('.splited-left').find('.is-active');
            $.each(arr,function () {
                $(this).removeClass('is-active');
            });
            $(this).addClass('is-active');
        }
        let container = $('.js-chng-txt');
        let txt = $(this).siblings('.hidden-text').text();
        container.text(txt);

    }
);