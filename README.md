🛍️ Mini E-commerce Frontend
Este es un proyecto frontend de práctica que simula un sistema de registro, login y visualización de productos usando HTML, CSS y JavaScript. Los datos se almacenan de manera local en el navegador utilizando localStorage, ideal para fines educativos y pruebas.

🚀 Funcionalidades
Registro de nuevos usuarios.
Validación de campos obligatorios.
Login con control de credenciales.
Almacenamiento de usuarios en localStorage.
Redirección a la página de productos tras el login.
Visualización de productos reales obtenidos desde una API pública.
Filtrado de productos por categoría.
🧰 Tecnologías utilizadas
HTML5
CSS3
JavaScript
Fake Store API (para simular productos)
📂 Estructura del proyecto
/html

├── contacto.html # Página principal con productos

├── login.html # Formulario de inicio de sesión

└── registrarse.html # Formulario de registro

└── productos.html # Formulario de productos

/css

└── estilos-registros.css # Estilos registro

└── reset.css # Estilos login

└── style.css # Estilos generales

└── style-contactos.css # Estilos contactos

/js

└── index.js # Lógica del programa

├── login.js # Lógica de validación de login

├── registro.js # Lógica de registro y guardado en localStorage

└── producto.js # Fetch a API y renderizado de productos

🛡️ Consideraciones de seguridad
⚠️ Este proyecto utiliza localStorage para almacenar usuarios y contraseñas sin encriptar, por lo tanto no debe usarse en producción.
Es únicamente para fines educativos. En un entorno real, se debería usar un backend con base de datos, encriptación de contraseñas y autenticación con tokens.

🧪 Cómo probar el proyecto
Clona el repositorio:

git clone https://github.com/LautaroOrellano/CAC-Pre-Entrega-Front.git
Abre el archivo register.html en tu navegador para registrar un nuevo usuario.

Luego, abre login.html, inicia sesión con los datos registrados.

Si el login es exitoso, serás redirigido a index.html donde se muestran los productos.

👨‍💻 Autor Lautaro Orellano Estudiante Codo a Codo 2024
