let electronic = [];
let jewelery = [];
let menClothing = [];
let womanClothing = [];

fetch('https://fakestoreapi.com/products')
   .then(res => res.json())
   .then(json => {
      for (const product of json) {
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
      agregarProductosALaLista(menClothing);
   });

function agregarProductosALaLista(productos) {
   const listaProductos = document.getElementById('listaProductos');
   listaProductos.innerHTML = '';

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












