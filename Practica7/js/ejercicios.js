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

// Ejercicio 1
const { otros: { amigos } } = gato;
const amigoIndex2 = amigos[2];
console.log(amigoIndex2); // Salida: Milo

// Ejercicio 2
const { otros: { favoritos: { comida: { caliente } } } } = gato;
console.log(caliente); // Salida: pollo

// Ejercicio 3
gato.otros.favoritos.lugares = []; // Agregar un nuevo array para lugares
console.log(gato.otros.favoritos); // Verifica que lugares se haya agregado

// Ejercicio 4
gato.otros.favoritos.lugares.push("caja", "sofá"); // Agregar lugares favoritos
console.log(gato.otros.favoritos.lugares); // Salida: ["caja", "sofá"]
