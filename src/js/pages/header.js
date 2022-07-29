const headerScale = () => {
    let container = document.querySelector('.header-container')
    let threshold = 100;
    window.scrollY > threshold ? container.classList.add('header-container-scaled') : container.classList.remove('header-container-scaled')
}

window.addEventListener('scroll', headerScale)

const headerOpacity = () => {
    let header = document.querySelector('header')
    header.classList.remove('header-onload')
}

window.addEventListener('load', headerOpacity)