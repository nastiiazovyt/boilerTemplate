import SplitType from "split-type";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//________________________________________________________________________
//Анимация заголовока
const menuTitleAnimation = () => {
    let menuTitle = document.querySelector('.menu-title')
    if (menuTitle) {
        const menuTitleSplit1 = new SplitType('.menu-title-first-line', {types: "chars"})
        const menuTitleSplit2 = new SplitType('.menu-title-second-line', {types: "chars"})
        const menuTitleSplit3 = new SplitType('.menu-title-third-line', {types: "chars"})
        const menuTitleSplit4 = new SplitType('.menu-title-fourth-line', {types: "chars"})
        let menuTitleArrayFirst = document.querySelectorAll('.menu-title-first-line .char')
        let menuTitleArraySecond = document.querySelectorAll('.menu-title-second-line .char')
        let menuTitleArrayThird = document.querySelectorAll('.menu-title-third-line .char')
        let menuTitleArrayFourth = document.querySelectorAll('.menu-title-fourth-line .char')
        gsap.fromTo(menuTitleArrayFirst, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                each: .02
            },
            duration: .5,
            scrollTrigger: {
                trigger: menuTitle,
                start: 'center bottom-=100px',
            }
        })
        gsap.fromTo(menuTitleArraySecond, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                each: .02
            },
            duration: .5,
            scrollTrigger: {
                trigger: menuTitle,
                start: 'center bottom-=100px',

            }
        })
        gsap.fromTo(menuTitleArrayThird, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                each: .02
            },
            delay: .1,
            duration: .5,
            scrollTrigger: {
                trigger: menuTitle,
                start: 'center bottom-=100px',

            }
        })
        gsap.fromTo(menuTitleArrayFourth, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                each: .02
            },
            delay: .2,
            duration: .5,
            scrollTrigger: {
                trigger: menuTitle,
                start: 'center bottom-=100px',

            }
        })
    }
}

window.addEventListener('load', menuTitleAnimation)


//________________________________________________________________________
//Анимация плавного появления блока с описанием при скролле
const menuSubtitleScrollAnimation = () => {
    let subtitleMenu= document.querySelector('.menu-container .subtitle-block')
    gsap.fromTo(subtitleMenu, {
        y: 15,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
            trigger: subtitleMenu,
            start: 'center bottom-=100px',
        }
    })
}

window.addEventListener('load', menuSubtitleScrollAnimation)

//________________________________________________________________________
//Анимация плавного появления блока при скролле
const menuScrollAnimation = () => {
    let menu= document.querySelector('.menu')
    let subtitleHero = document.querySelector('.hero-container .subtitle-block')

    gsap.fromTo(menu, {
        y: 15,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: .8,
        scrollTrigger: {
            trigger: subtitleHero,
            start: 'center bottom-=100px',
        }
    })
}

window.addEventListener('load', menuScrollAnimation)


//________________________________________________________________________
//Анимация стрелочек на ховере кнопки
let buttonMenu = document.querySelector('.menu-container .subtitle-button')
let svg1 = document.querySelector('.menu-container .subtitle-svg-1')
let svg2 = document.querySelector('.menu-container .subtitle-svg-2')

const arrowOnHoverMenu = () => {
    svg1.classList.add('svg-hover1')
    svg2.classList.add('svg-hover2')
    svg1.classList.remove('svg-not-hover1')
    svg2.classList.remove('svg-not-hover2')
}
buttonMenu.addEventListener('mouseover', arrowOnHoverMenu)

const arrowOutHoverMenu = () => {
    svg1.classList.remove('svg-hover1')
    svg2.classList.remove('svg-hover2')
    svg1.classList.add('svg-not-hover1')
    svg2.classList.add('svg-not-hover2')
}

buttonMenu.addEventListener('mouseout', arrowOutHoverMenu)
