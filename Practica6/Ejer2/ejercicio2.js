// Creación del objeto estudiante
let estudiante = {
  nombre: "Zulma",
  edad: "28",
  carrera: "Ing. en Desarrollo de Software",
  calificaciones: [8, 9, 7],

 // Función para calcular el promedio de las calificaciones
calcularPromedio: function() {
  let suma = this.calificaciones.reduce((acumulado, calificacion) => acumulado + calificacion, 0);
  return suma / this.calificaciones.length;
},

// Función para mostrar toda la información del estudiante
mostrarInfo: function() {
  return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nCarrera: ${this.carrera}\nCalificaciones: ${this.calificaciones.join(", ")}\nPromedio: ${this.calcularPromedio().toFixed(2)}`;
}
};

// Llamada a la función mostrarInfo
console.log(estudiante.mostrarInfo());