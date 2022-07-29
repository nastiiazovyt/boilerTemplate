import SplitType from "split-type";
import gsap from "gsap";

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