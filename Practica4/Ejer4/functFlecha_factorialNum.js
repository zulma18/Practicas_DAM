// Función de flecha que calcula el factorial de un número
const calcularFactorial = (numero) => {
    //verifica si el número ingresado es menor que 0. 
    if (numero < 0) return "No existe factorial para números negativos.";
    //El factorial de 0 está definido como 1. Si el número es 0
    if (numero === 0) return 1;
    let factorial = 1; //definicion de variable con valor inicial
    for (let i = 1; i <= numero; i++) {
        factorial *= i; //multiplica cd num, desde el 1 hasta el num dado por el user
    }
    return factorial;
}

// Función que se ejecuta al hacer clic en el botón y muestra el resultado en el HTML
function mostrarFactorial() {
    const numero = document.getElementById("numero").value; //obtiene el num ingresado
    const resultadoDiv = document.getElementById("resultado"); //div dnd se mostrara el resultado

    // Verificamos que el usuario haya ingresado un valor válido
    if (numero === "" || isNaN(numero)) { //si esta vacio ó es un caracter
        resultadoDiv.innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    const factorial = calcularFactorial(parseInt(numero)); //convierte a entero el num ingresado

    // Mostramos el resultado en el div de resultado de html
    resultadoDiv.innerHTML = `El factorial de ${numero} es ${factorial}.`;
}
