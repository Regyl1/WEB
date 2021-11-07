document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < document.getElementsByClassName('header-nav__elements').length; i++){
    if (document.getElementsByClassName('header-nav__elements')[i]["href"] === document.URL){
      activeElement = document.getElementsByClassName('header-nav__elements')[i];
      activeElement.className = 'active block';
      activeElement.removeAttribute("href");
      break;
    }
  }
  });