// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Función para generar los números primos hasta un límite dado
function generarPrimos(limite) { //nm del label cm parametro
    let primos = [];
    for (let i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

// Función que se ejecuta al hacer clic en el botón y muestra los resultados en el HTML
function mostrarPrimos() {
    const limite = document.getElementById("limite").value;
    const resultadoDiv = document.getElementById("resultado");
    const primos = generarPrimos(limite);

    // Limpiamos el resultado previo
    resultadoDiv.innerHTML = "";

    // Mostramos los números primos
    if (primos.length > 0) {
        resultadoDiv.innerHTML = "Números primos: " + primos.join(", ") + "\n";
    } else {
        resultadoDiv.innerHTML = "No hay números primos en este rango.";
    }
}
