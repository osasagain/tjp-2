
const hamburger = document.querySelector(".hamburger");
const streamLink = document.querySelector(".stream-links");


hamburger.addEventListener("click",  () => {
    hamburger.classList.toggle("active");
    streamLink.classList.toggle("active");
});