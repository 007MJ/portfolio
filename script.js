const header_responsive = document.querySelector(".header");

function change_display(){
  header_responsive.style.display = "block";
  header_responsive.style.flexDirection = "column";
  header_responsive.style.alignItems = "center";
  header_responsive.style.backgroundColor = "dark";
}

header_responsive.addEventListener("click", change_display)

