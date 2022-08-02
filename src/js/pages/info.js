import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


//________________________________________________________________________
//Анимация плавного появления блока при скролле
const infoScrollAnimation = () => {
    let info = document.querySelector('.info')
    gsap.fromTo(info, {
        y: 15,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
            trigger: info,
            // start: 'center bottom-=100px',
        }
    })

}

window.addEventListener('load', infoScrollAnimation)