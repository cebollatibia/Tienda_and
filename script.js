const productos = [];
let id = 1;
const vestidos = [
  
  { nombre: "Vestido 1", precio: 700, imagen: "img/vestido1.jpg" },
  { nombre: "Vestido 2", precio: 400, imagen: "img/vestido2.jpg" },
  { nombre: "Vestido 3", precio: 300, imagen: "img/vestido3.jpg" },
  { nombre: "Vestido 4", precio: 350, imagen: "img/vestido4.jpg" },
  { nombre: "Vestido 5", precio: 520, imagen: "img/vestido5.jpg" },
  { nombre: "Vestido 6", precio: 420, imagen: "img/vestido6.jpg" },
  { nombre: "Vestido 7", precio: 600, imagen: "img/vestido7.jpg" },
  { nombre: "Vestido 8", precio: 590, imagen: "img/vestido8.jpg" },
  { nombre: "Vestido 9", precio: 590, imagen: "img/vestido9.jpg" },
  { nombre: "Vestido 10", precio: 590, imagen: "img/vestido10.jpg" },
  { nombre: "Vestido 11", precio: 650, imagen: "img/vestido11.jpg" },
  { nombre: "Vestido 12", precio: 490, imagen: "img/vestido12.jpg" },
  { nombre: "Vestido 13", precio: 750, imagen: "img/vestido13.jpg" },
  { nombre: "Vestido 14", precio: 450, imagen: "img/vestido14.jpg" },
  { nombre: "Vestido 15", precio: 350, imagen: "img/vestido15.jpg" },
];
vestidos.forEach(v => {
  productos.push({
    id: id++,
    nombre: v.nombre,
    categoria: "vestidos",
    precio: v.precio,
    imagen: v.imagen
  });

});
const tops = [
  { nombre: "Top 1", precio: 450, imagen: "img/top1.jpg" },
  { nombre: "Top 2", precio: 350, imagen: "img/top2.jpg" },
  { nombre: "Top 3", precio: 400, imagen: "img/top3.jpg" },
  { nombre: "Top 4", precio: 250, imagen: "img/top4.jpg" },
  { nombre: "Top 5", precio: 300, imagen: "img/top5.jpg" },
  { nombre: "Top 6", precio: 320, imagen: "img/top6.jpg" },
  { nombre: "Top 7", precio: 370, imagen: "img/top7.jpg" },
  { nombre: "Top 8", precio: 230, imagen: "img/top8.jpg" },
];
tops.forEach(t => {
  productos.push({
    id: id++,
    nombre: t.nombre,
    categoria: "tops",
    precio: t.precio,
    imagen: t.imagen
  });
});
const accesorios = [
  { nombre: "accesorio 1", precio: 430, imagen: "img/accesorio1.jpg" },
  { nombre: "accesorio  2", precio: 210, imagen: "img/accesorio2.jpg" },
  { nombre: "accesorio  3", precio: 400, imagen: "img/accesorio3.jpg" },
  { nombre: "accesorio  4", precio: 270, imagen: "img/accesorio4.jpg" },
  { nombre: "accesorio 6", precio: 170, imagen: "img/accesorio6.jpg" },
  { nombre: "accesorio 7", precio: 200, imagen: "img/accesorio7.jpg" },
  { nombre: "accesorio 8", precio: 225, imagen: "img/accesorio8.jpg" },
  { nombre: "accesorio 9", precio: 145, imagen: "img/accesorio9.jpg" },
  { nombre: "accesorio 10", precio: 235, imagen: "img/accesorio10.jpg" },
  { nombre: "accesorio 13", precio: 460, imagen: "img/accesorio13.jpg" },
  { nombre: "accesorio 14", precio: 475, imagen: "img/accesorio14.jpg" },
  { nombre: "accesorio 15", precio: 285, imagen: "img/accesorio15.jpg" },
  { nombre: "accesorio 16", precio: 347, imagen: "img/accesorio16.jpg" },
];
accesorios.forEach(a => {
  productos.push({
    id: id++,
    nombre: a.nombre,
    categoria: "accesorios",
    precio: a.precio,
    imagen: a.imagen
  });
});
const zapatos = [
  { nombre: "zapato 1", precio: 478, imagen: "img/zapatos1.jpg" },
  { nombre: "zapato 2", precio: 654, imagen: "img/zapatos2.jpg" },
  { nombre: "zapato 3", precio: 487, imagen: "img/zapatos3.jpg" },
  { nombre: "zapato 4", precio: 569, imagen: "img/zapatos4.jpg" },
  { nombre: "zapato 5", precio: 754, imagen: "img/zapatos5.jpg" },
  { nombre: "zapato 6", precio: 476, imagen: "img/zapatos6.jpg" },
  { nombre: "zapato 7", precio: 500, imagen: "img/zapatos7.jpg" },
  { nombre: "zapato 8", precio: 380, imagen: "img/zapatos8.jpg" },
  { nombre: "zapato 9", precio: 460, imagen: "img/zapatos9.jpg" },
  { nombre: "zapato 10", precio: 580, imagen: "img/zapatos10.jpg" },
  { nombre: "zapato 11", precio: 543, imagen: "img/zapatos11.jpg" },
  { nombre: "zapato 12", precio: 430, imagen: "img/zapatos12.jpg" },
  { nombre: "zapato 13", precio: 390, imagen: "img/zapatos13.jpg" },
  { nombre: "zapato 14", precio: 590, imagen: "img/zapatos14.jpg" },
  { nombre: "zapato 15", precio: 560, imagen: "img/zapatos15.jpg" },
  { nombre: "zapato 16", precio: 489, imagen: "img/zapatos16.jpg" },
  { nombre: "zapato 17", precio: 570, imagen: "img/zapatos17.jpg" },
  { nombre: "zapato 18", precio: 400, imagen: "img/zapatos18.jpg" },
  { nombre: "zapato 19", precio: 1400, imagen: "img/zapatos19.jpg" },
  { nombre: "zapato 20", precio: 1500, imagen: "img/zapatos20.jpg" },
  { nombre: "zapato 21", precio: 1700, imagen: "img/zapatos21.jpg" },
];
zapatos.forEach(z => {
  productos.push({
    id: id++,
    nombre: z.nombre,
    categoria: "zapatos",
    precio: z.precio,
    imagen: z.imagen
  });
});
const pantalones = [
  { nombre: "pantalon 1", precio: 470, imagen: "img/pantalon1.jpg" },
  { nombre: "pantalon 2", precio: 378, imagen: "img/pantalon2.jpg" },
  { nombre: "pantalon 3", precio: 450, imagen: "img/pantalon3.jpg" },
  { nombre: "pantalon 4", precio: 350, imagen: "img/pantalon4.jpg" },
  { nombre: "pantalon 5", precio: 400, imagen: "img/pantalon5.jpg" },
  { nombre: "pantalon 6", precio: 460, imagen: "img/pantalon6.jpg" }, 
];
pantalones.forEach(p => {
  productos.push({
    id: id++,
    nombre: p.nombre,
    categoria: "pantalones",
    precio: p.precio,
    imagen: p.imagen
  });
});
const shorts = [
  { nombre: "short 1", precio: 420, imagen: "img/short1.jpg" },
  { nombre: "short 2", precio: 378, imagen: "img/short2.jpg" },
  { nombre: "short 3", precio: 230, imagen: "img/short3.jpg" },
  { nombre: "short 4", precio: 270, imagen: "img/short4.jpg" },
  { nombre: "short 5", precio: 380, imagen: "img/short5.jpg" },
  { nombre: "short 6", precio: 350, imagen: "img/short6.jpg" },
  { nombre: "short 7", precio: 320, imagen: "img/short7.jpg" },
];
shorts.forEach(s => {
  productos.push({
    id: id++,
    nombre: s.nombre,
    categoria: "shorts",
    precio: s.precio,
    imagen: s.imagen
  });
});
const carrito = [];
const productosContainer = document.getElementById("productos");
const carritoContador = document.getElementById("carrito-contador");
const listaCarrito = document.getElementById("lista-carrito");

function mostrarProductos(filtro = "todos") {
  productosContainer.innerHTML = "";

  const filtrados = filtro === "todos"
    ? productos
    : productos.filter(p => p.categoria === filtro);

  filtrados.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";

    let html = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
    `;

    // Agregar tallas según la categoría del producto
    const tallas = obtenerTallasPorCategoria(producto.categoria);
    if (tallas) {
      html += `<label for="talla-${producto.id}">Talla:</label>
      <select id="talla-${producto.id}">
        ${tallas.map(t => `<option value="${t}">${t}</option>`).join("")}
      </select>`;
    }

    html += `<button onclick="agregarAlCarrito(${producto.id})">Agregar</button>`;

    div.innerHTML = html;
    productosContainer.appendChild(div);
  });
}

// Función auxiliar que devuelve tallas según categoría
function obtenerTallasPorCategoria(categoria) {
  switch (categoria) {
    case "tops":
      return ["XS", "S", "M", "L", "XL"];
    case "vestidos":
      return ["2", "4", "6", "8", "10", "12"];
    case "shorts":
      return ["24", "26", "28", "30", "32"];
    case "pantalones":
      return ["1", "3", "5", "7", "9", "11"];
    case "accesorios":
      return ["Única", "Chica", "Mediana", "Grande"];
    case "zapatos":
      return ["22", "23", "24", "25", "26", "27", "28"];
    default:
      return null;
  }
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);

  // Buscar el select de tallas solo si existe
  const selectTalla = document.getElementById(`talla-${id}`);
  let tallaSeleccionada = "Sin talla";

  if (selectTalla) {
    tallaSeleccionada = selectTalla.value || "Sin talla";
  }

  carrito.push({ ...producto, talla: tallaSeleccionada });
  carritoContador.textContent = carrito.length;
}

function verCarrito() {
  document.getElementById("carrito-modal").classList.remove("oculto");
  listaCarrito.innerHTML = "";

  carrito.forEach(p => {
    const li = document.createElement("li");

    const tallaTexto = p.talla && p.talla !== "Sin talla" ? ` - Talla: ${p.talla}` : "";

    li.textContent = `${p.categoria.toUpperCase()} - ${p.nombre}${tallaTexto} - $${p.precio}`;
    listaCarrito.appendChild(li);
  });
}

if (!document.getElementById("vaciar-carrito")) {
    const btnVaciar = document.createElement("button");
    btnVaciar.textContent = "Vaciar carrito";
    btnVaciar.id = "vaciar-carrito";
    btnVaciar.onclick = () => {
      carrito.length = 0;
      carritoContador.textContent = "0";
      listaCarrito.innerHTML = "";
    };
    document.getElementById("carrito-modal").appendChild(btnVaciar);
  }

function cerrarCarrito() {
  document.getElementById("carrito-modal").classList.add("oculto");
}

function filtrar(categoria) {
  mostrarProductos(categoria);
}

document.getElementById("entrar").addEventListener("click", () => {
  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("tienda").classList.remove("oculto");
  mostrarProductos();
});
document.getElementById("regresar").addEventListener("click", () => {
  document.getElementById("tienda").classList.add("oculto");
  document.getElementById("inicio").classList.remove("oculto");
});
