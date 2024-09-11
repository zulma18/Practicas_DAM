function crearArray() {
    // Crear un array vacío
    let numeros = [];

    // Llenar el array con números del 1 al 10 usando un bucle for
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    // Mostrar el array en la consola
    console.log(numeros);

    // Mostrar el array en la página web
    document.getElementById('resultado').innerText = 'Array: ' + numeros.join(', ');
}
