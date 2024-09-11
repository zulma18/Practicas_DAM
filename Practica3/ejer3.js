function multiplicarNumeros() {
    // Crear un array con números del 1 al 50
    let numeros = [];
    for (let i = 1; i <= 50; i++) {
        numeros.push(i);
    }

    // Crear un nuevo array para almacenar los resultados de la multiplicación
    let numerosMultiplicados = numeros.map(num => num * 2);

    // Mostrar el nuevo array en la consola
    console.log(numerosMultiplicados);

    // Mostrar el nuevo array en la página web
    document.getElementById('resultado').innerText = 'Números multiplicados por 2: \n' + numerosMultiplicados.join(',\n ');
}

// Ejecutar la función al cargar la página
window.onload = multiplicarNumeros;
