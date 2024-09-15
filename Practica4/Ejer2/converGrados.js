// Función que convierte grados Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Función que se ejecuta al hacer clic en el botón y muestra el resultado en el HTML
function mostrarConversion() {
    const celsius = document.getElementById("celsius").value;
    const resultadoDiv = document.getElementById("resultado");

    // Verificamos que el usuario haya ingresado un valor válido
    if (celsius === "") {
        resultadoDiv.innerHTML = "Por favor, ingrese un valor en grados Celsius.";
        return;
    }

    const fahrenheit = convertirCelsiusAFahrenheit(celsius);

    // Mostramos el resultado en el div de resultado
    resultadoDiv.innerHTML = `${celsius}°C son ${fahrenheit.toFixed(2)}°F.`;
}
