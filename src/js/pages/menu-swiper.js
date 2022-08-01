import Swiper from 'swiper';
import {Navigation} from "swiper";

const menuSlides = document.querySelectorAll('.menu-section')

menuSlides.forEach(slider => {

    const menuSwiper = new Swiper('.swiper', {
        modules: [Navigation],
        navigation: {
            nextEl: '.subtitle-button-next',
            prevEl: '.subtitle-button-prev',
        },
        spaceBetween: 20,
        slidesPerView: "auto",
        centeredSlides: false,
    });
})