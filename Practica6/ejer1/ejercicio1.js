// Creación del objeto carro
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
  
    // Función que retorna la descripción del carro
    descripción: function() {
      console.log(`El carro es un ${this.marca} ${this.modelo} del año ${this.año}.`)
    }
  };
  
  // Llamada a la función descripción
  carro.descripción();
  