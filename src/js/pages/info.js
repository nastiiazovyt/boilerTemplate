import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const infoScrollAnimation = () => {
    let info = document.querySelector('.info')
    gsap.fromTo(info, {
        y: 10,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: info,
        }
    })

}

window.addEventListener('load', infoScrollAnimation)