// Desestructuracion de objetos

const gato = {
    nombre: 'Michi',
    duerme: true,
    edad: 10,
    enemigos: ['agua', 'perros'],
    otros: {
          amigos: ["Pelusa", "Bombi", "Milo"],
          favoritos: {
              comida: {
                  fria: "salmón",
                  caliente: "pollo",
              },
          },
    },
    comer(comida) {
      return `${this.nombre} está comiendo ${comida}`;
    },
    get nombreMayuscula() {
      return this.nombre.toUpperCase();
    },
    set nuevoEnemigo(nombre) {
      this.enemigos.push(nombre);
    },
  };
  console.log(gato.comer('Atun'));
  console.log(gato.nombreMayuscula);
  gato.nuevoEnemigo = "Pelusa"
  // const nombreGato = gato.nombre
  // console.log(nombreGato)
  // const { nombre, duerme, edad, enemigos } = gato;
  // console.log(nombre);
  // console.log(duerme);
  // console.log(edad);
  // console.log(enemigos);
  // const {nombre: nombreGato} = gato
  // console.log(nombreGato)
  // const { nombre: nombreGato = "sin nombre" } = gato
  // console.log(nombreGato)
  // const {
  //   otros: { amigos },
  //   otros: { favoritos: { comida: fria} }
  // } = gato
  // console.log(fria)
  // const enemigos = ["agua", "perros"]
  // const [agua, perro] = enemigos;
  // console.log(agua);
  // console.log(perro);