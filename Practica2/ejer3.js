function ordenarNumeros() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    // Validar que los números no sean NaN
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor ingresa tres números válidos.");
        return;
    }
    
    // Crear un array con los números
    const numeros = [num1, num2, num3];
    
    // Ordenar el array en orden ascendente
    numeros.sort((a, b) => a - b);
    
    // Mostrar los números ordenados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";  // Limpiar resultados anteriores
    
    numeros.forEach(num => {
        const p = document.createElement("p");
        p.textContent = num;
        resultDiv.appendChild(p);
    });
}
