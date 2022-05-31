const abrir = document.querySelector('#boton-carrito');
const modal_container = document.querySelector('#modal_container');
const cerrar = document.querySelector('#close');

abrir.addEventListener('click', () => {
    if(!modal_container.classList.contains('show')){
        modal_container.classList.add('show')
    } else {
        modal_container.classList.remove('show');
    }
});

cerrar.addEventListener('click', () => modal_container.remove('show'));