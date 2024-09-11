function calcularSuma() {
    // Crear un array con algunos números
    let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    // Calcular la suma total de todos los elementos del array
    let sumaTotal = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    // Mostrar la suma total en la consola
    console.log('Suma total:', sumaTotal);

    // Mostrar la suma total en la página web
    document.getElementById('resultado').innerText = 'Suma total de los elementos: ' + sumaTotal;
}

// Ejecuta la función al cargar la página
window.onload = calcularSuma;
