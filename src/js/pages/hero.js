import SplitType from "split-type";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroOpacity = () => {
    let heroDescription = document.querySelector('.hero-desc')
    let heroVideo = document.querySelector('.hero-video')
    heroDescription.classList.remove('hero-desc-onload')
    heroVideo.classList.remove('hero-video-onload')
}

window.addEventListener('load', heroOpacity)

const heroTitleAnimation = () => {
    if (document.querySelector('.hero-title')) {
        const heroTitleSplit = new SplitType('.hero-title-line', {types: "chars"})
        let heroTitleArray = document.querySelectorAll('.hero-title .char')
        gsap.fromTo(heroTitleArray, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                each: .03
            }
        })
    }
}

window.addEventListener('load', heroTitleAnimation)

const heroSubtitleScrollAnimation = () => {
    let subtitleHero = document.querySelector('.hero-container .subtitle-block')
    gsap.fromTo(subtitleHero, {
        y: 10,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: subtitleHero,
        }
    })
}

window.addEventListener('load', heroSubtitleScrollAnimation)

const heroVideoAnimation = () => {
    let heroVideo = document.querySelector('.hero-video-container')
    gsap.fromTo(heroVideo, {
        y: 35,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
    })

    gsap.fromTo(heroVideo, {
        border: '1px solid #3A3A22',
    }, {
        border: '1px solid transparent',
        duration: 3,
    })
}

window.addEventListener('load', heroVideoAnimation)

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


