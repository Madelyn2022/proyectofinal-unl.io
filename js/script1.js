// Slider de imagenes de Invitaciones.html
// Obtener todas las imágenes del slider
var images = document.querySelectorAll('.slider span img');

// Agregar evento de clic a cada imagen
images.forEach(function(image) {
  image.addEventListener('click', function() {
    // Remover la clase 'active' de todas las imágenes
    images.forEach(function(img) {
      img.parentNode.classList.remove('active');
    });
    
    // Agregar la clase 'active' a la imagen clicada
    this.parentNode.classList.add('active');
  });
});




    // GALERIA DE VIDEOS ANUNCIOS COMERCIALES


 
    document.addEventListener("DOMContentLoaded", function() {
      const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
      let currentIndex = 0;
    
      function playNextItem() {
        galleryItems[currentIndex].style.visibility = "hidden";
    
        currentIndex = (currentIndex + 1) % galleryItems.length;
    
        galleryItems[currentIndex].style.visibility = "visible";
        galleryItems[currentIndex].querySelector("video").play();
      }
    
      galleryItems[currentIndex].style.visibility = "visible";
      galleryItems[currentIndex].querySelector("video").play();
    
      setInterval(playNextItem, 5000);
    });
    
    
     