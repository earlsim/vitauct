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
    spaceBetween: 6,
    loop: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpointsInverse: true,
    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        568: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    }
});
let swiperCertificate = new Swiper('.sertificate-slider', {
   speed:600,
   slidesPerView: 1,
   spaceBetween: 8,
   loop: true,
   dynamicBullets: true,
   dynamicMainBullets: 3,
   pagination: {
        el: '.swiper-pagination-docs',
        clickable: true,
    },
    breakpointsInverse: true,
    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        568: {
            slidesPerView: 3,
            spaceBetween: 6,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 24,
        }
    }
});
let swiperPeople = new Swiper('.people-slider', {
   speed: 600,
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
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 6,
    loop: true,
    grabCursor: true,
    resistance: false,
    loopAdditionalSlides: 6,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    freeModeMomentum: true,
    breakpointsInverse: true,
    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        1440: {
            slidesPerView: 2,
            spaceBetween: 26,
        }
    }
});

let galerySlider = new Swiper('.galery-slider', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicMainBullets: 3,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpointsInverse: true,
    breakpoints: {
        414: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

//mobile-slider
let mobileSlider = new Swiper('.mobile-slider-9steps', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 6,
    breakpointsInverse: true,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
        }
    }
});
//legacy :(

$('.js-faq').click( function () {
    $(this).find('.faq-item').toggleClass('is-active');
    $(this).find('.faq-item').find('.js-faq-text').toggle(200);
});
$('.js-spl-item').click(function () {
        $(this).stop(false, true);
        if ($(this).hasClass('is-active')) {
            // $(this).removeClass('is-active');
        } else {
            let arr = $(this).closest('.splited-left').find('.is-active');
            $.each(arr,function () {
                $(this).removeClass('is-active');
            });
            $(this).addClass('is-active');
        }
        let container = $('.js-chng-txt');

        let ChngTitle = $('.js-chng-title');
        let title = $(this).text();

        let txt = $(this).siblings('.hidden-text').text();
        ChngTitle.fadeOut(600);
        container.fadeOut(600);
        setTimeout(
            function () {
                ChngTitle.text(title);
                container.text(txt);
            },600
        );
        ChngTitle.fadeIn();
        container.fadeIn();
    }
);
$('.js-show-more').click(function () {
    $(this).siblings('.js-text').toggleClass('full-text');
    if ($(this).text()=="Показать полностью") {
        $(this).text('Скрыть');
    } else {
        $(this).text('Показать полностью');
    }

});