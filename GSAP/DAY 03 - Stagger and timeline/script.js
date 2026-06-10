const loadingElement = document.querySelector('.loading');

let count  = 0;
const interval = setInterval(() => {
    count++;
    loadingElement.textContent = `${count}%`;
    if(count === 100) {
        clearInterval(interval);
        animate();
    }
}, 20);


function animate() {
    const tl = gsap.timeline();

    tl.to("loading", {
        opacity: 0,
        duration: 1,
    })
    .to(".loader", {
        yPercent: 100,
        duration: 0.5,
        ease: "power2.out",
    }, "<")
    .to(".background", {
        scale: 1.1,
        duration: 0.5,
        ease: "expo.out",
    }, "-=0.7")
    .from(".heading", {
        y: 50,
        opacity: 0,
        ease: "expo.out",
    }, "-=0.3")
     .from(".paragraph", {
        y: 50,
        opacity: 0,
        ease: "expo.out",
    }, "-=0.2")
}