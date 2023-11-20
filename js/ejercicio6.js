class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  get getISBN() {
    return this.ISBN;
  }

  set setISBN(nuevoISBN) {
    this.ISBN = nuevoISBN;
  }

  get getTitulo() {
    return this.titulo;
  }

  set setTtitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }

  get getAutor() {
    return this.autor;
  }

  set setAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }

  get getNumPaginas() {
    return this.numPaginas;
  }

  set setNumPaginas(nuevoNumPaginas) {
    this.numPaginas = nuevoNumPaginas;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.getTitulo} creado por el autor ${this.getAutor} y tiene ${this.getNumPaginas} páginas.</p>`
    );
  }
}

const libro1 = new Libro(
  9783140464079,
  "El principito",
  "Antoine de Saint-Exupéry",
  parseInt(`92`)
);

const libro2 = new Libro(
  9789875453289,
  "Los ojos del perro siberiano",
  "Antonio Santa Ana",
  parseInt(`136`)
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.getNumPaginas > libro2.getNumPaginas) {
  document.write(
    `<p>El libro con mas páginas es ${libro1.getTitulo} con ${libro1.numPaginas} páginas.</p>`
  );
} else if (libro1.getNumPaginas < libro2.getNumPaginas) {
  document.write(
    `<p>El libro con mas páginas es ${libro2.getTitulo} con ${libro2.numPaginas} páginas.</p>`
  );
} else if (libro1.getNumPaginas === libro2.getNumPaginas) {
  document.write(`<p>Ambos libros poseen la misma cantidad de páginas</p>`);
}
