document.addEventListener("DOMContentLoaded", () => {
    const formu = document.querySelector("#formulario");

    formu.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = formu.nombre.value;
        const apellido = formu.apellido.value;
        const email = formu.email.value;
        const contrasenia = formu.contrasenia.value;
        const fechaNacimiento = formu.fechaNacimiento.value;
        const pais = formu.pais.value;
        const terminos = formu.terminos.value;

        if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" ||
            contrasenia.trim() === "" || fechaNacimiento.trim() === "" || pais.trim() === "" ||
            terminos.trim() === "") {
            alert("Por favor no escriba datos vacios");
            return;
        };

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existeUsuario = users.find((user) => user.nombre === nombre);

        if (existeUsuario) {
            alert("Usuario inexistente, escribe otro nombre");
            return
        };

        const usuarioNuevo = {
            nombre,
            apellido,
            email,
            contrasenia,
            fechaNacimiento,
            pais,
            terminos,
        };

        users.push(usuarioNuevo);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "../html/login.html";
    });
});