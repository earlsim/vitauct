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
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpointsInverse: true,
    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        568: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});
let swiperCertificate = new Swiper('.sertificate-slider', {
   speed:600,
   slidesPerView: 1,
   spaceBetween: 24,
   pagination: {
        el: '.swiper-pagination-docs',
        clickable: true,
    },
    breakpointsInverse: true,
    breakpoints: {
        414: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        568: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 24,
        }
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
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    resistance: false,
    loopAdditionalSlides: 6,
    freeModeMomentum: true,
    breakpointsInverse: true,
    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetween: 26,
        },
        568: {
            slidesPerView: 1,
            spaceBetween: 26,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 26,
        }
    }
});

let galerySlider = new Swiper('.galery-slider', {
    speed:400,
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicMainBullets: 3,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
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