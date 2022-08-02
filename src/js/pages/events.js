import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//________________________________________________________________________
//Анимация плавного появления блока при скролле
const eventScrollAnimation = () => {
    let event = document.querySelector('.event')
    gsap.fromTo(event, {
        y: 15,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
            trigger: event,
            // start: 'center bottom-=100px',
        }
    })

}

window.addEventListener('load', eventScrollAnimation)

//________________________________________________________________________
//Анимация стрелочек на ховере кнопки
let buttonEvents = document.querySelector('.event-container .subtitle-button')
let svg1 = document.querySelector('.event-container .subtitle-svg-1')
let svg2 = document.querySelector('.event-container .subtitle-svg-2')

const arrowOnHoverMenu = () => {
    svg1.classList.add('svg-hover1')
    svg2.classList.add('svg-hover2')
    svg1.classList.remove('svg-not-hover1')
    svg2.classList.remove('svg-not-hover2')
}
buttonEvents.addEventListener('mouseover', arrowOnHoverMenu)

const arrowOutHoverMenu = () => {
    svg1.classList.remove('svg-hover1')
    svg2.classList.remove('svg-hover2')
    svg1.classList.add('svg-not-hover1')
    svg2.classList.add('svg-not-hover2')
}

buttonEvents.addEventListener('mouseout', arrowOutHoverMenu)