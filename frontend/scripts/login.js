document.addEventListener("DOMContentLoaded", () => {
    const formu = document.querySelector("#formulario-log");

    formu.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = formu.email.value;
        const contrasenia = formu.contrasenia.value;
        
        if(email.trim() === "" || contrasenia.trim() === "") {
            alert("Por favor escriba nuevamente el usuario y o la contraseña");
            return;
        };

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existeUsuario = users.find((user) => user.email === email && user.contrasenia === contrasenia);

        if(existeUsuario){
            localStorage.setItem("loggedUser", JSON.stringify(existeUsuario));
            window.location.replace("../index.html")
            return;
        } else {
            alert("Usuario inexistente, intente nuevamente");
            formu.email.value = "";
            formu.contrasenia.value = "";
            return;
        }  
    });
});