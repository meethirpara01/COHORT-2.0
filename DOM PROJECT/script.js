let allElems = document.querySelectorAll(".elem");
let allFullElems = document.querySelectorAll(".fullElem");

allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
        console.log(allFullElems[elem.id]);
        allFullElems[elem.id].style.display = "block" 
    })
});