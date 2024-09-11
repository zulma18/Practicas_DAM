function filtrarNumeros() {
    const n = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";  // Limpiar los resultados anteriores
    
    if (isNaN(n) || n < 1) {
        resultDiv.innerHTML = "<div class='alert alert-danger' role='alert'>Por favor ingresa un número válido.</div>";
        return;
    }
    
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        if (i % 3 === 0 && i % 5 === 0) {
            output = "<div class='alert alert-info'>Pachirisu God</div>";
        } else if (i % 3 === 0) {
            output = "<div class='alert alert-warning'>Squirtle</div>";
        } else if (i % 5 === 0) {
            output = "<div class='alert alert-success'>Pikachu</div>";
        } else {
            output = `<div class='alert alert-light'>${i}</div>`;
        }
        
        resultDiv.innerHTML += output;
    }
}
