const modal_container = document.getElementById('modal_container');
const boton = document.querySelector("#cerrar");
const botond = document.querySelector("#btninferior");
// Agregar listener
boton.addEventListener("click", function (evento) {
    // Aquí todo el código que se ejecuta cuando se da click al botón
    modal_container.classList.remove('show')
});

botond.addEventListener("click", function (evento) {
    // Aquí todo el código que se ejecuta cuando se da click al botón
    modal_container.classList.add('show')
});