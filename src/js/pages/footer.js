import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerScrollAnimation = () => {
    let footer = document.querySelector('.footer')
    gsap.fromTo(footer, {
        y: 20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: footer,
        }
    })

}

window.addEventListener('load', footerScrollAnimation)