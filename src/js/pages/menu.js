import SplitType from "split-type";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuTitleAnimation = () => {
    if (document.querySelector('.menu-title')) {
        const menuTitleSplit = new SplitType('.menu-title-line', {types: "chars"})
        let menuTitleArray = document.querySelectorAll('.menu-title-line .char')
        gsap.fromTo(menuTitleArray, {
            yPercent: 100
        }, {
            yPercent: 0,
            stagger: {
                each: .01
            }
        })
    }
}

const menuSubtitleScrollAnimation = () => {
    let subtitleMenu= document.querySelector('.menu-container .subtitle-block')
    gsap.fromTo(subtitleMenu, {
        y: 10,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: subtitleMenu,
        }
    })

}

window.addEventListener('load', menuSubtitleScrollAnimation)

const menuScrollAnimation = () => {
    let menu = document.querySelector('.menu')
    gsap.fromTo(menu, {
        y: 20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: menu,
        }
    })

}

window.addEventListener('load', menuScrollAnimation)

const menuBlockScrollAnimation = () => {
    let menuBlock = document.querySelector('.menu-block')
    gsap.fromTo(menuBlock, {
        y: 20,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: menuBlock,
        }
    })

}

window.addEventListener('load', menuBlockScrollAnimation)

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
