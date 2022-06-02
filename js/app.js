//VARIABLES
const carrito = document.querySelector('#dropdown-content');
const listaCursos = document.querySelector('.productos');
const contenedorCarrito = document.querySelector('#dropdown-content tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', quitarCurso)

    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    });
}

function agregarCurso(e){
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    };
}

//Lee el contenido del HTML y extraigo datos
function leerDatosCurso(curso){

    //objeto con info actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: '2500',
        id: curso.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si elemento ya existe

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
    if(existe){
        const  cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    //agrego elementos al arreglo de carrito

    

    console.log(articulosCarrito)

    carritoHTML();
    
}

//muestra carrito en HTML

function carritoHTML(){

    //limpiar html
    limpiarHTML();
    //recorre carrito y genera html
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" class="img-tabla" alt="foto del curso">
        </td>
        <td>
            ${titulo}
        </td>
        <td>
            $${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>`

        //agrega html en carrito

        contenedorCarrito.appendChild(row);
    });
}

// elimina cursos de tablebody

function limpiarHTML() {
    //forma lenta
    // contenedorCarrito.innerHTML = '';

    //forma más rápida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

//funcion del botón eliminar item

function quitarCurso(e){
    
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML();
    }

}

//Vaciar carrito

// function vaciarCarrito(e){
//     if(e.target.classList.contains('vaciar-carrito')) {
//         articulosCarrito = [];
//     }

//     carritoHTML();
// }