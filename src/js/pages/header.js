const headerScale = () => {
    let container = document.querySelector('.header-container')
    let threshold = 100;
    window.scrollY > threshold ? container.classList.add('header-container-scaled') : container.classList.remove('header-container-scaled')
}

window.addEventListener('scroll', headerScale)

const headerOpacity = () => {
    let header = document.querySelector('header')
    header.classList.remove('onload')
}

window.addEventListener('load', headerOpacity)




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

