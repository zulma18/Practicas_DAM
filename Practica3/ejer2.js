function buscarIndice() {
    // Crear un array con números del 1 al 10
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Capturar el valor a buscar mediante un prompt
    let valorBuscado = parseInt(prompt("Introduce el número que deseas buscar en el array:"), 10);

    // Encontrar el índice del valor en el array
    let indice = numeros.indexOf(valorBuscado);

    // Mostrar el índice en la página web
    let resultado = (indice !== -1) ? `El índice del número ${valorBuscado} es ${indice}.` : `El número ${valorBuscado} no se encontró en el array.`;
    document.getElementById('resultado').innerText = resultado;
}

// Ejecutar la función al cargar la página
window.onload = buscarIndice;
