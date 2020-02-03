
function nextSlide() {
    let nextSlide = null;
    let currentSlide = document.querySelector(".cats div.cat.selected");
    const index = getChildNumber(currentSlide);

    if (index == currentSlide.parentNode.childElementCount - 1)
        nextSlide = currentSlide.parentNode.firstElementChild;
    else
        nextSlide = currentSlide.nextElementSibling;
    nextSlide.classList.add("selected");
    currentSlide.classList.remove("selected");
}
function previousSlide() {
    let prevSlide = null;
    let currentSlide = document.querySelector(".cats div.cat.selected");
    const index = getChildNumber(currentSlide);
    
    if (index == 0)
        prevSlide = currentSlide.parentNode.lastElementChild;
    else
        prevSlide = currentSlide.previousElementSibling;
    prevSlide.classList.add("selected");
    currentSlide.classList.remove("selected");
}

function getChildNumber(node) {
    return Array.prototype.indexOf.call(node.parentNode.children, node);
}