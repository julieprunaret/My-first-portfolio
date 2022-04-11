

window.onload = function() {


  var nav = document.querySelector(".nav button");
  var crossbox = document.querySelector(".crossbox");
  var backgroundNav = document.querySelector(".nav")
  var menubutton = document.querySelector(".menubutton")
  var logo = document.querySelector(".logo")
 

  window.addEventListener("scroll", function() {
    if (window.scrollY !== 0) {
      backgroundNav.classList.add("backgroundNav");
      menubutton.classList.add("menubuttonlittle");
      logo.classList.add("logolittle");
    } else {
      backgroundNav.classList.remove("backgroundNav");
      menubutton.classList.remove("menubuttonlittle");
      logo.classList.remove("logolittle");

    }
  });

  nav.addEventListener("click", function() {
    var menu = document.querySelector(".menu");
    menu.classList.add("visible");
    nav.classList.add("hide");
    if (backgroundNav.classList.contains("backgroundNav")) {
      backgroundNav.classList.remove("backgroundNav");
    }
  });

  crossbox.addEventListener("click", function() {
    var menu = document.querySelector(".menu");
    menu.classList.remove("visible");
    nav.classList.remove("hide");
    if (window.scrollY !== 0) {
      backgroundNav.classList.add("backgroundNav");
    }
  });










/*
    el.addEventListener("scroll", function() {
    var backgroundNav = document.querySelector(".backgroundNav");
    if (backgroundNav.classList.scrollTop(".backgroundNav")) {
      backgroundNav.classList.remove("backgroundNav");
    } else if{
      backgroundNav.classList.add("backgroundNav");
    }
  });
*/

}


var button = document.getElementsByTagName('button')[0];
var image = document.getElementsByTagName('img')[0];

window.afficher = function(){
image.style.display = (image.style.display == "block") ? "none" : "block";
}



button.onclick = afficher;
button.onclick = display;


