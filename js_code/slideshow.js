let slideIndex = 1;
let slideTime = 4000;

var timeCount = window.setTimeout(outoShowSlides, slideTime);

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide_show_frame");

  window.clearTimeout(timeCount);
  timeCount = window.setTimeout(outoShowSlides, slideTime);

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

function outoShowSlides() {
  plusSlides(1);
}
