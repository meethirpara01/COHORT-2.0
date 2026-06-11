const loadingElement = document.querySelector('.loading h3');

let count  = 0;
const interval = setInterval(() => {
    count++;
    loadingElement.innerHTML = `${count}%`;
    if(count === 100) {
        clearInterval(interval);
        landingAnimation();
    }
}, 20);


function landingAnimation() {
    const tl = gsap.timeline();

    tl.to(".loading", {
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out'
    })
    .to(".loader", {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
    }, "-=0.9")
    .from(".background img", {
        scale: 1.2,
        duration: 1.3,
        ease: "expo.out",
    }, "-=1.1")
    .from(".heading h1", {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
    }, "-=0.97")
     .from(".paragraph h2", {
       yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
    }, "-=0.87")
}