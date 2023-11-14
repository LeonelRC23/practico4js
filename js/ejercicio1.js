class auto{
    constructor(color, marca, modelo, encendido){
        this._color = color;
        this._marca = marca;
        this._modelo = modelo;
        this._encendido = encendido;
    }

    encender(){
        this._encendido = true;
        return `<p>Auto encendido</p>`
    }

    apagar(){
        this._encendido = false;
        return `<p>El auto se apago</p>`
    }
}

const golTrend = new auto("Rojo", "volkswagen", "Gol Trend", false);
golTrend.encender();
golTrend.apagar();
