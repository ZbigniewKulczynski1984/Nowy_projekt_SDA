let isOpen = false

const hamburger = document.getElementById("hamburger");

function renderHamburger(){
    hamburger.className = isOpen ? "open" : "closed"}

function toggleHamburger() {
    isOpen = !isOpen
    renderHamburger()
}

hamburger.addEventListener("click", toggleHamburger)