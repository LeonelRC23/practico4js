class rectangulos{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    get getAlto(){
        return this.alto;
    }

    get getAncho(){
        return this.ancho;
    }

    set setAlto(valor){
        this.alto = valor;
    }

    set setAncho(valor){
        this.ancho = valor;
    }

    perimetro(){
        const P = 2*this.alto + 2*this.ancho;
        return document.write(`<p>El perimetro de un rectangulo de ${this.alto} cm y ${this.ancho} cm es de ${P} cm.</p>`);
    }

    area(){
        const A = this.alto * this.ancho;
        return document.write(`<p>El area de un rectangulo de ${this.alto} cm y ${this.ancho} cm es de ${A} cm.</p>`);
    }
}

const rec = new rectangulos(20, 40);
rec.perimetro();
rec.area();