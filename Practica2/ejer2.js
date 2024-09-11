function mostrarNumeros() {
    let number = 100;  // Empezar en 100
    let decrement = 5; // Iniciar con decremento de 5
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";  // Limpiar resultados anteriores
    
    while (number >= 1) {
        const p = document.createElement("p");
        p.textContent = number;
        resultDiv.appendChild(p);
        
        number -= decrement;  // Decrementar el número actual
        
        // Alternar entre decremento de 5 y 3
        decrement = (decrement === 5) ? 3 : 5;
    }
}
