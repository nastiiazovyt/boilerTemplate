import SplitType from "split-type";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//________________________________________________________________________
//Анимации плавного появления элементов на главной странице
const heroAnimation = () => {
    let heroVideoContainer = document.querySelector('.hero-video-container')
    let heroVideo = document.querySelector('.hero-video')
    let heroDescription = document.querySelector('.hero-desc')
    let subtitleHero = document.querySelector('.hero-container .subtitle-block')
    if (document.querySelector('.hero-title')) {
        const heroTitleSplit = new SplitType('.hero-title-line', {types: "chars"})
        let heroTitleArray = document.querySelectorAll('.hero-title .char')
        gsap.fromTo(heroTitleArray, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                each: .025
            },
            duration: .5,
        })
    }
    gsap.fromTo(heroVideoContainer, {
        y: 30,
    }, {
        y: 0,
        duration: 1,
    })

    gsap.fromTo(heroVideo, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 3,
        delay: 1,
    })

    gsap.fromTo(heroVideoContainer, {
        border: '1px solid #3A3A22',
    }, {
        border: '1px solid transparent',
        duration: 3,
        delay: 1,
    })

    gsap.fromTo(heroDescription, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        delay: .5,
    })

    gsap.fromTo(subtitleHero, {
        y: 15,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
            trigger: subtitleHero,
            start: 'center bottom-=50px',

        }
    })
}

window.addEventListener('load', heroAnimation)

//________________________________________________________________________
//Анимация стрелочек на ховере кнопки
let buttonHero = document.querySelector('.hero-container .subtitle-button')
let svg1 = document.querySelector('.hero-container .subtitle-svg-1')
let svg2 = document.querySelector('.hero-container .subtitle-svg-2')

const arrowOnHoverHero = () => {
    svg1.classList.add('svg-hover1')
    svg2.classList.add('svg-hover2')
    svg1.classList.remove('svg-not-hover1')
    svg2.classList.remove('svg-not-hover2')
}
buttonHero.addEventListener('mouseover', arrowOnHoverHero)

const arrowOutHoverHero = () => {
    svg1.classList.remove('svg-hover1')
    svg2.classList.remove('svg-hover2')
    svg1.classList.add('svg-not-hover1')
    svg2.classList.add('svg-not-hover2')
}

buttonHero.addEventListener('mouseout', arrowOutHoverHero)


