//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("cv").classList.add("barra-progreso2");
        document.getElementById("ai").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}
//FUNCION DE TARJETA DE PRESENTACION
const cardElements = document.querySelectorAll('.card');

cardElements.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});
const personaje = document.getElementById('personaje');

personaje.addEventListener('click', function() {
  personaje.style.animationPlayState = 'paused';
});

// Controla la animación del carrusel utilizando JavaScript
var carousel = document.querySelector('.carousel');
var images = carousel.querySelectorAll('.img');
var angle = 0;

setInterval(function() {
  angle += 60;
  carousel.style.transform = 'rotateY(' + angle + 'deg)';
}, 2000);


