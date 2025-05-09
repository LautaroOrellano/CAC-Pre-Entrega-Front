let electronic = [];
let jewelery = [];
let menClothing = [];
let womanClothing = [];

// Hago una solicitud a la api para obeter una lista de productos
fetch('https://fakestoreapi.com/products')
   .then(res => res.json()) // convierto la respuesta en formato JSON
   .then(json => { //Luego de recibir la repuesta

      // Itero sobre cada producto recibido por la api
      for (const product of json) {

         // Dependiendo de la cateogira lo agrego a su correspondiente arreglo
         switch (product.category) {
            case "men's clothing":
               menClothing.push(product);
               break;
            case "jewelery":
               jewelery.push(product);
               break;
            case "women's clothing":
               womanClothing.push(product);
               break;
            case "electronics":
               electronic.push(product);
               break;
            default:
               console.log(`Categoría no reconocida: ${product.category}`);
         }
      }
      // Llamamos a la función para agregar los productos de la categoría "menClothing" a la lista
      agregarProductosALaLista(menClothing);
   });

// Función para agregar los productos a la lista de productos en la página
function agregarProductosALaLista(productos) {
   // Obtenemos el contenedor donde se mostrarán los productos
   const listaProductos = document.getElementById('listaProductos');
   // Limpiamos el contenido actual de la lista de productos
   listaProductos.innerHTML = '';

   // Recorremos cada producto de la lista que recibimos
   productos.forEach(product => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.className = 'imagenPagProductos';
      img.src = product.image;

      const descripcion = document.createElement('p');
      descripcion.className = 'producto-descripcion';
      descripcion.textContent = product.description;

      const precio = document.createElement('p');
      precio.className = 'producto-precio';
      precio.textContent = product.price;

      li.appendChild(img);
      li.appendChild(descripcion);
      li.appendChild(precio);
      listaProductos.appendChild(li);
   });
}

// Función para mostrar productos de una categoría específica
function mostrarCategoria(categoria) {
   switch (categoria) {
      case 'menClothing':
         agregarProductosALaLista(menClothing);
         break;
      case 'jewelery':
         agregarProductosALaLista(jewelery);
         break;
      case 'womanClothing':
         agregarProductosALaLista(womanClothing);
         break;
      case 'electronics':
         agregarProductosALaLista(electronic);
         break;
      default:
         console.log(`Categoría no reconocida: ${categoria}`);
   }
}












