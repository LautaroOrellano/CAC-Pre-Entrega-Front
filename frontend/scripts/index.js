const user = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(user);

const loginBoton = document.getElementById('login-boton');
const registroBoton = document.getElementById('registro-boton');
const productBoton = document.getElementById('product-boton');
const logoutBoton = document.getElementById('cerrar-sesion');

if (user.length != 0) {

    if (loginBoton && registroBoton) {
        loginBoton.style.display = 'none';
        registroBoton.style.display = 'none';
        productBoton.style.display = 'inline'
        logoutBoton.style.display = 'inline';
    } else {
        console.error("Elementos con ID 'login-boton' o 'registro-boton' no encontrados");
    }

} else {
    loginBoton.style.display = 'inline';
    registroBoton.style.display = 'inline';
    logoutBoton.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const cerrarSesion = document.getElementById('cerrar-sesion');

    cerrarSesion.addEventListener('click', () => {

        localStorage.removeItem('loggedUser');
    });
});