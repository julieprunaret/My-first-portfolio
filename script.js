

window.onload = function() {

//
  var buttonformation = document.querySelector(".buttonformation");

  buttonformation.addEventListener("click", function() {
    var cacher = document.querySelector(".cacherformation");
    if (cacher.classList.contains("visible")) {
      cacher.classList.remove("visible");
    } else {
      cacher.classList.add("visible");
    }
  });

  var buttonexperience = document.querySelector(".buttonexperience");

  buttonexperience.addEventListener("click", function() {
    var cacher = document.querySelector(".cacherexperience");
    if (cacher.classList.contains("visible")) {
      cacher.classList.remove("visible");
    } else {
      cacher.classList.add("visible");
    }
  });

    var buttonexperiencemob = document.querySelector(".buttonexperiencemob");

    buttonexperiencemob.addEventListener("click", function() {
    var cacher = document.querySelector(".cacherexperiencemob");
    if (cacher.classList.contains("visible")) {
      cacher.classList.remove("visible");
    } else {
      cacher.classList.add("visible");
    }
  });

  var buttonbonus = document.querySelector(".buttonbonus");

  buttonbonus.addEventListener("click", function() {
    var cacher = document.querySelector(".cacherbonus");
    if (cacher.classList.contains("visible")) {
      cacher.classList.remove("visible");
    } else {
      cacher.classList.add("visible");
    }
  });


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





