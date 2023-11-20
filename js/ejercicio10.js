class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if(this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        document.write(`<p>${pasajero} abordó el avión ${this.nombre}.</p>`);
      } else {
        document.write(`<p>El avión ${this.nombre} está lleno. No se puede abordar a ${pasajero}.</p>`);
      }
    }
  }

  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      document.write(`<p>Avión ${avion.nombre} agregado al aeropuerto.</p>`);
    }
  
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
  
      if(avionEncontrado) {
        document.write(`<p>Información del avión ${nombreAvion} - Destino: ${avionEncontrado.destino}, Capacidad: ${avionEncontrado.capacidad}</p>`);
      }else{
        document.write(`<p>No se encontró el avión con nombre ${nombreAvion}.</p>`);
      }
    }
  }
  

  const aeropuertoInternacional = new Aeropuerto("Aeropuerto de Tucuman");
  
  const avion1 = new Avion("Avion001", 150, "Ottawa");
  const avion2 = new Avion("Avion002", 200, "Noruega");
  const avion3 = new Avion("Avion003", 100, "Andorra");
  
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  aeropuertoInternacional.buscarAvion("Avion002");
  
  avion2.abordar("Leonel Cordero");
  avion2.abordar("Fabrizio Cordero");
  avion2.abordar("Leandro Cordero");
  