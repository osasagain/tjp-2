
const hamburger = document.querySelector(".hamburger");
const streamMenu = document.querySelector(".stream-links");


hamburger.addEventListener("click",  () => {
    hamburger.classList.toggle("active");
    streamMenu.classList.toggle("active");
});