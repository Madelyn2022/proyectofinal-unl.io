
const sliders = document.querySelectorAll('.carruseles');
const btnLeft = document.querySelectorAll('.btn-left');
const btnRight = document.querySelectorAll('.btn-right');

sliders.forEach((slider, index) => {
 const sliderSection = slider.querySelectorAll('.slider-section');
 const widthImg = 100 / sliderSection.length;
 let currentIndex = 0;

 function moveToRight() {
   if (currentIndex >= sliderSection.length - 1) {
     currentIndex = 0;
   } else {
     currentIndex++;
   }
   slider.style.transform = `translateX(-${currentIndex * widthImg}%)`;
   slider.style.transition = "all ease .6s";
 }

 function moveToLeft() {
   if (currentIndex <= 0) {
     currentIndex = sliderSection.length - 1;
   } else {
     currentIndex--;
   }
   slider.style.transform = `translateX(-${currentIndex * widthImg}%)`;
   slider.style.transition = "all ease .6s";
 }

 btnLeft[index].addEventListener("click", moveToLeft);
 btnRight[index].addEventListener("click", moveToRight);

 setInterval(moveToRight, 3000);
});
