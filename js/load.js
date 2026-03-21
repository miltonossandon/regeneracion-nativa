// ===== CARGA HEADER =====
fetch("components/header.html")
.then(res => res.text())
.then(data => {
document.getElementById("header").innerHTML = data;

/* ACTIVAR MENU HAMBURGUESA DESPUÉS DE CARGAR */
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(toggle && nav){
toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});
}

});


// ===== CARGA FOOTER =====
fetch("components/footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});


// ===== CARRUSEL =====
document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".carousel-track");
if(!track) return;

const slides = track.querySelectorAll(".bloque");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".carousel-dots");

let index = 0;


/* CREAR PUNTOS */
slides.forEach((_, i) => {

const dot = document.createElement("div");
dot.classList.add("dot");

if(i === 0){
dot.classList.add("active");
}

dot.addEventListener("click", () => {
index = i;
updateCarousel();
});

dotsContainer.appendChild(dot);

});

const dots = dotsContainer.querySelectorAll(".dot");


/* ACTUALIZAR CARRUSEL */
function updateCarousel(){

track.style.transform = `translateX(-${index * 100}%)`;

dots.forEach(dot => dot.classList.remove("active"));
dots[index].classList.add("active");

}


/* BOTON SIGUIENTE */
next.addEventListener("click", () => {

index++;

if(index >= slides.length){
index = 0;
}

updateCarousel();

});


/* BOTON ANTERIOR */
prev.addEventListener("click", () => {

index--;

if(index < 0){
index = slides.length - 1;
}

updateCarousel();

});

});