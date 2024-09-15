// Función de flecha que convierte grados Fahrenheit a Kelvin
const convertirFahrenheitAKelvin = (fahrenheit) => (fahrenheit - 32) * 5 / 9 + 273.15;

// Función que se ejecuta al hacer clic en el botón y muestra el resultado en el HTML
function mostrarConversion() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    const resultadoDiv = document.getElementById("resultado");

    // Verificamos que el usuario haya ingresado un valor válido
    if (fahrenheit === "") {
        resultadoDiv.innerHTML = "Por favor, ingresa un valor en grados Fahrenheit.";
        return;
    }

    const kelvin = convertirFahrenheitAKelvin(fahrenheit);

    // Mostramos el resultado en el div de resultado
    resultadoDiv.innerHTML = `${fahrenheit}°F son ${kelvin.toFixed(2)} K.`;
}
