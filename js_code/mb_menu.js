let menu = document.querySelector('.menu-mb');
let menuButton = document.querySelector('.menu-button');
let menuButtonClose = document.querySelector('.menu-button-close');
let menuOpen = false;

menuButton.addEventListener('click', changeMenu);
menu.addEventListener('click', evt => closeMenu(evt));
menuButtonClose.addEventListener('click', changeMenu);

function changeMenu(){
  if (menuOpen) {
    console.log(1)
    menu.setAttribute('data-closing', '');

    menu.addEventListener('animationend', evt => {
      console.log(5)
      menu.removeAttribute('data-closing');
      menu.close();
      menuOpen = false;
    }, {once: true});
  }
  else {
    console.log(2)
    menu.showModal();
    menuOpen = true
  }
}

function closeMenu(evt){
  if (menuOpen && evt.target.nodeName == 'DIALOG'){
    console.log(3)
    menu.setAttribute('data-closing', '');

    menu.addEventListener('animationend', evt => {
      console.log(4)
      menu.removeAttribute('data-closing');
      menu.close();
      menuOpen = false;
    }, {once: true});
  }
}
