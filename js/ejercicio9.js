class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    get getNombre(){
        return this.nombre;
    }

    emitirSonido(){
        document.write();
    }
}

class Perro extends Animal{
    emitirSonido(){
       return "GUAU GUAU....WOOF";
    }
}

class Gato extends Animal{
    emitirSonido(){
       return "MIAUUUUU >:(";
    }
}



const roco = new Perro("Roco", 5);
const kitty = new Gato("Kitty", 3);
document.write(`<p>${roco.getNombre}: ${roco.emitirSonido()}</p>`);
document.write(`<p>${kitty.getNombre}: ${kitty.emitirSonido()}</p>`);