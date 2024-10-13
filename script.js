
function displaySidebar(){
    const header_responsive = document.querySelector(".links");
    header_responsive.style.display = "flex";
    const icone_open = document.querySelector(".icon_nav");
    const bg_header =  document.querySelector(".header");
    bg_header.style.backgroundColor = "#97CDF2"
    icone_open.style.display = "none";
    const close_nav =  document.querySelector(".close_nav");
    close_nav.style.display = "flex"
}

function  close_navbar(){
    const close_nav =  document.querySelector(".close_nav");
    const header_responsive = document.querySelector(".links");
    header_responsive.style.display = "none";
    close_nav.style.display = "none"
    const icone_open = document.querySelector(".icon_nav");
    icone_open.style.display = "flex";
    const bg_header =  document.querySelector(".header");
    bg_header.style.backgroundColor = ""

}