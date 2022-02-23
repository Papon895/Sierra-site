
let menu = document.querySelector(".menu");
let logoSec = document.querySelector(".logo-sec");
window.addEventListener("scroll", function() {
  logoSec.classList.toggle("sticky",window.scrollY > 0)
})
function clickFun() {
  if (menu.style.display == "block"){
    menu.style.display = "none";
   
  }else {
    menu.style.display = "block";
   
  }
}
let blog = document.querySelector(".menu #nested-blog");
function nestedBlog () {
  if (blog.style.display == "block"){
    blog.style.display = "none";
   
  
  }else {
    blog.style.display = "block";
  }
}

//form

