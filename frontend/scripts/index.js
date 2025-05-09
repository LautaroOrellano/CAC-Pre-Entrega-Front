// Obtenemos del almacenamiento local el usuario que está logueado.
const user = JSON.parse(localStorage.getItem("loggedUser")) || [];

// Obtenemos del DOM los elementos de navegación por su ID.
const loginBoton = document.getElementById('login-boton');
const registroBoton = document.getElementById('registro-boton');
const productBoton = document.getElementById('product-boton');
const logoutBoton = document.getElementById('cerrar-sesion');

if (user.length != 0) {

        //Verifico que los elementos se encuentre en el DOM antes de modificarlos
    if (loginBoton && registroBoton) {
        // Oculto los botones de login y registro porque ya hay un usuario autenticado
        loginBoton.style.display = 'none';
        registroBoton.style.display = 'none';
        // Muestro el botón para acceder a productos
        productBoton.style.display = 'inline'
        // Muestra el botón de cerrar sesión
        logoutBoton.style.display = 'inline';
    } else {
        // Muestro error en consola por no tenter los elementos
        console.error("Elementos con ID 'login-boton' o 'registro-boton' no encontrados");
    }

} else {
    // Si no existe el usuario logueado(array vacio), muestro login y registro
    loginBoton.style.display = 'inline';
    registroBoton.style.display = 'inline';
    // Oculto el boton de cerrar sesión
    logoutBoton.style.display = 'none';
}

// Espero a que todo el contenido del DOM este cargado
document.addEventListener("DOMContentLoaded", () => {
    //Vuelvo a obtener el boton de "cerrar sesion"
    const cerrarSesion = document.getElementById('cerrar-sesion');

    //Le agrego un evento cuando el usuario hace click.
    cerrarSesion.addEventListener('click', () => {

        // Con esto simulo el "logout", elimino del localstoreg la informacion del user logueado
        localStorage.removeItem('loggedUser');
    });
});