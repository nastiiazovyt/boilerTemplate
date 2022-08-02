import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


//________________________________________________________________________
//Анимация плавного появления блока при скролле
const footerScrollAnimation = () => {
    let footer = document.querySelector('.footer')
    gsap.fromTo(footer, {
        y: 15,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
            trigger: footer,
            // start: 'center bottom-=100px',

        }
    })

}

window.addEventListener('load', footerScrollAnimation)