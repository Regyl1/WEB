document.addEventListener("DOMContentLoaded", function() {
  let thisUrl = document.URL;
  if (thisUrl === "https://regyl1.github.io/WEB/"){
    thisUrl = "https://regyl1.github.io/WEB/index.html"
  }
  for (let i = 0; i < document.getElementsByClassName('header-nav__elements').length; i++){
    if (document.getElementsByClassName('header-nav__elements')[i]["href"] === thisUrl){
      activeElement = document.getElementsByClassName('header-nav__elements')[i];
      activeElement.className = 'active block';
      activeElement.removeAttribute("href");
      break;
    }
  }
  });