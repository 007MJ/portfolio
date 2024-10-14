
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