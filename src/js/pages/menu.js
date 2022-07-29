import SplitType from "split-type";
import gsap from "gsap";

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
