 // GALERIA DE INVITACIONES DIGITALES
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


 