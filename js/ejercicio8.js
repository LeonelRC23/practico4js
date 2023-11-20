class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    get getNombre(){
        return this.nombre;
    }

    get getEdad(){
        return this.edad;
    }

    get getProfesion(){
        return this.profesion;
    }

    saludar(frase){
        document.write(`${frase}`);
    }

    despedirse(frase){
        document.write(`${frase}`);
    }
}

const persona1 = new Persona("Leonel", 23, "estudiante");
const persona2 = new Persona("Fabrizio", 19, "Tecnico");

persona1.saludar(`<p>Hola, me llamo ${persona1.getNombre}, tengo ${persona1.getEdad} años y soy ${persona1.getProfesion}, mucho gusto.</p>`);
persona1.despedirse(`<p>Un gusto conocerlos, ¡Hasta luego!</p>`);

persona2.saludar(`<p>Buenos dias, mi nombre es ${persona2.getNombre} soy ${persona2.getProfesion} y tengo ${persona2.getEdad} años.</<p>`);
persona2.despedirse(`<p>¡Adios! Mucho gusto.</p>`);