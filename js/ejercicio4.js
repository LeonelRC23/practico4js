class producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarProducto(){
        document.write(`<ul>
            <li>Codigo: ${this.codigo}.</li>
            <li>Nombre: ${this.nombre}.</li>
            <li>Precio: ${this.precio}.</li>
        </ul>`);
    }
}


const producto1 = new producto(10062000, "Computadora", 150000);
const producto2 = new producto(15062004, "Pelota de futbol", 40000);
const producto3 = new producto(20012007, "Celular", 120000);
const arrayProductos = [producto1, producto2, producto3];

arrayProductos[0].mostrarProducto();
arrayProductos[1].mostrarProducto();
arrayProductos[2].mostrarProducto();

// producto1.mostrarProducto();
// producto2.mostrarProducto();
// producto3.mostrarProducto();