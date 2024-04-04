
document.querySelector(".js-navigation-img-blue").innerHTML = `
    <img src="images/logo-blue.svg" alt="logo" class="navigation__image"/>
`;

let navigationMenu = document.querySelector(".navigation__menu");
let squareMenu = document.querySelector('.menu__square');
let isClicked;

navigationMenu.addEventListener("click", () => {

  isClicked = !isClicked;

  if (isClicked) {
    navigationMenu.innerHTML = `<img src="images/icon-close.svg" alt="logo" class="navigation__close"/>
    <ul class="menu__square">
        <li class="links"><a href="#">Home</a></li>
        <li class="links"><a href="#">About</a></li>
        <li class="links"><a href="#">Contact</a></li>
        <li class="links"><a href="#">Blog</a></li>
        <li class="links"><a href="#">Careers</a></li>
     </ul>
    `;

    squareMenu.style.visibility = 'visible';


  } else {
    navigationMenu.innerHTML = `
        <img src="images/icon-hamburger.svg" alt="logo" class="navigation__menu"/>
        `;
  }
});

  if(window.innerWidth >= 425){

    document.querySelector('.bg-intro-desktop-change').innerHTML =
    `<img src="./images/bg-intro-desktop.svg" alt="bg-intro-desktop" class="bg-intro-desktop"/>`;
  }else{
    document.querySelector('.bg-intro-desktop-change').innerHTML = '';
  }


  if(window.innerWidth >= 1024){
    document.querySelector('.navigation__menu').innerHTML = 
    `<ul class="horizontal__menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Careers</a></li>
    <button class="btn horizontal-btn">Request Invite</button>
 </ul>`

    
  }else{
    document.querySelector('.navigation__menu').innerHTML =
    `<img src="images/icon-hamburger.svg" alt="logo" class="navigation__menu"/>`
  }
