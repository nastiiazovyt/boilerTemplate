import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin)

//________________________________________________________________________
//Анимация на хедер при скролле
const headerScale = () => {
    let container = document.querySelector('.header-container')
    let threshold = 100;
    window.scrollY > threshold ? container.classList.add('header-container-scaled') : container.classList.remove('header-container-scaled')
}

window.addEventListener('scroll', headerScale)


//________________________________________________________________________
//Анимация плавного появления хедера
const headerOpacity = () => {
    let header = document.querySelector('header')
    gsap.fromTo(header, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
    })
}

window.addEventListener('load', headerOpacity)


//________________________________________________________________________
//Анимация стрелочек на ховере кнопки
let buttonHeader = document.querySelector('.header-container .subtitle-button')
let svg1 = document.querySelector('.header-container .subtitle-svg-1')
let svg2 = document.querySelector('.header-container .subtitle-svg-2')

const arrowOnHoverHeader = () => {
    svg1.classList.add('svg-hover1')
    svg2.classList.add('svg-hover2')
    svg1.classList.remove('svg-not-hover1')
    svg2.classList.remove('svg-not-hover2')
}
buttonHeader.addEventListener('mouseover', arrowOnHoverHeader)

const arrowOutHoverHeader = () => {
    svg1.classList.remove('svg-hover1')
    svg2.classList.remove('svg-hover2')
    svg1.classList.add('svg-not-hover1')
    svg2.classList.add('svg-not-hover2')
}

buttonHeader.addEventListener('mouseout', arrowOutHoverHeader)


//________________________________________________________________________
//Анимация при клике на ссылки в хедере
let menuButton = document.querySelector('.menu-link')
let eventButton = document.querySelector('.event-link')
let contactsButton = document.querySelector('.contacts-link')
let menu = document.querySelector('.menu')
let events = document.querySelector('.event')
let contacts = document.querySelector('.footer')

const ScrollOnClick = () => {
    menuButton.addEventListener('click', () => {
        gsap.to(window, {
            scrollTo: menu,
            duration: 1,
            ease: 'power4.inOut',
        })
    })
    eventButton.addEventListener('click', () => {
        gsap.to(window, {
            scrollTo: events,
            duration: 1,
            ease: 'power4.inOut',
        })
    })
    contactsButton.addEventListener('click', () => {
        gsap.to(window, {
            scrollTo: contacts,
            duration: 1,
            ease: 'power4.inOut',
        })
    })
}

window.addEventListener('load', ScrollOnClick)


