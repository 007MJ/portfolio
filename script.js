
function displaySidebar(){
    const close_nav =  document.querySelector(".header-reponsive");
    const open_nav =  document.querySelector(".header");
    close_nav.style.display = "flex";
    open_nav.style.display = "none";
}

function  close_navbar(){
    const close_nav =  document.querySelector(".header-reponsive");
    const open_nav =  document.querySelector(".header");
    close_nav.style.display = "none";
    open_nav.style.display = "flex";
}


let slider =  document.querySelector(".main-skill");
let innerSlider = document.querySelector(".section-skill");


let pressed = false;
let startx;
let x;
console.log(slider);
slider.addEventListener("click", (event) =>{
    pressed = true;
    startx = e.offsetX;
    console.log(startx);
    console.log(2);
});
console.log(3);