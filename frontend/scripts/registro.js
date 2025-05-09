// Esperamos que todo el contenido del DOM este completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Obtenemos el formulario con el id "formulario"
    const formu = document.querySelector("#formulario");

    formu.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtenemos los valores ingresados por el usuario en los distintos campos del formulario
        const nombre = formu.nombre.value;
        const apellido = formu.apellido.value;
        const email = formu.email.value;
        const contrasenia = formu.contrasenia.value;
        const fechaNacimiento = formu.fechaNacimiento.value;
        const pais = formu.pais.value;
        const terminos = formu.terminos.value;

        // Validacion ningun campo este vacio (usamos trim() para eliminar espacios en blanco al inicio/final)
        if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" ||
            contrasenia.trim() === "" || fechaNacimiento.trim() === "" || pais.trim() === "" ||
            terminos.trim() === "") {
            alert("Por favor no escriba datos vacios");
            return;
        };

         // Obtenemos los usuarios almacenados en localStorage, o un array vacío si no hay ninguno
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificamos si ya existe un usuario con el mismo nombre
        const existeUsuario = users.find((user) => user.nombre === nombre);

        if (existeUsuario) {
            alert("El usuario ya existe, escribe otro nombre");
            return
        };

        // Creamos un nuevo objeto de usuario con los datos del formulario
        const usuarioNuevo = {
            nombre,
            apellido,
            email,
            contrasenia,
            fechaNacimiento,
            pais,
            terminos,
        };

        // Agregamos el nuevo usuario al array de usuarios
        users.push(usuarioNuevo);

        // Guardamos el array actualizado en el localStorage como cadena de texto (stringify)
        localStorage.setItem("users", JSON.stringify(users));
        
        // Redirigimos al usuario a la página de login después del registro exitoso
        window.location.href = "../html/login.html";
    });
});