// Controlo que el contenido del DOM se haya cargado completo antes de ejecutar algo dentro 
document.addEventListener("DOMContentLoaded", () => {
    // Selecciono el formulario de login utilizando su id
    const formu = document.querySelector("#formulario-log");

    // Agrego un evento para saber detectar si el usuario envio el formulario
    formu.addEventListener("submit", (e) => {
        // Prevengo que la pagina no se recargue al enviarlo
        e.preventDefault();

        // Obtengo los valores ingresados por el usuario en los campos email y contraseña
        const email = formu.email.value;
        const contrasenia = formu.contrasenia.value;
        
        // Verifico si algunos de los campos esta vacio, si sucede esto muestro un alerta y detengo el proceso
        if(email.trim() === "" || contrasenia.trim() === "") {
            alert("Por favor escriba nuevamente el usuario y o la contraseña");
            return;
        };

        // Obtengo el la lista de usuarios almacenada en el LocalStorage y si no uso un array vacio
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Busco en el array de usuarios si existe un usuario que coincida con el email y la contraseña que obtube
        const existeUsuario = users.find((user) => user.email === email && user.contrasenia === contrasenia);

        // Si lo encuentro lo guardo en localStorage como "loggedUser"
        if(existeUsuario){

            // Guardo el usuario
            localStorage.setItem("loggedUser", JSON.stringify(existeUsuario));

            // Me redirijo a la pagina inicio despues del login
            window.location.replace("../index.html")

            return;
        } else {
            // Si no hay usuario con esos valores muestro un alerta
            alert("Usuario inexistente, intente nuevamente");

            //Limpio los campos para que el usuario vuelva a ingresar los datos
            formu.email.value = "";
            formu.contrasenia.value = "";
            return;
        }  
    });
});