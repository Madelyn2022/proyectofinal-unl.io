const images = document.querySelectorAll('.image');

for (let [index, image] of images.entries()){
   image.addEventListener('click', function focus() {
       resetFocus();
       image.classList.toggle('active');
   });
}

function resetFocus() {
   images.forEach(i => i.classList.remove('active'));
}
