// Llamadas a los componentes de la interfaz
const btnJustify = document.querySelector('#btnJustify');
const btnAlignLeft = document.querySelector('#btnAlignLeft');
const btnAlignCenter = document.querySelector('#btnAlignCenter');
const btnAlignRight = document.querySelector('#btnAlignRight');
const btnBold = document.querySelector('#btnBold');
const btnItalic = document.querySelector('#btnItalic');
const btnUnderline = document.querySelector('#btnUnderline');

// Elementos del editor de texto
const texto = document.querySelector('#texto');
const textosGuardados = document.querySelector('#textosGuardados');

// Array que almacena el contenido guardado
const arrayTextos = [];

// Variables de estado para el formato de texto
let boldState = false, italicState = false, underlineState = false;

// Botones de guardado, limpieza y eliminación de textos
const btnGuardar = document.querySelector('#btnGuardar');
const btnEliminar = document.querySelector('#btnEliminar');
const btnLimpiar = document.querySelector('#btnLimpiar');

// Evento para justificar el texto
btnJustify.addEventListener('click', () => {
    texto.style.textAlign = "justify";
});

// Evento para alinear el texto a la izquierda
btnAlignLeft.addEventListener('click', () => {
    texto.style.textAlign = "left";
});

// Evento para alinear el texto al centro
btnAlignCenter.addEventListener('click', () => {
    texto.style.textAlign = "center";
});

// Evento para alinear el texto a la derecha
btnAlignRight.addEventListener('click', () => {
    texto.style.textAlign = "right";
});

// Evento para dar formato de negrita al texto
btnBold.addEventListener('click', () => {
    if (!boldState) {
        texto.style.fontWeight = "bold";
        boldState = true;
    } else {
        texto.style.fontWeight = "normal";
        boldState = false;
    }
});

// Evento para dar formato de cursiva al texto
btnItalic.addEventListener('click', () => {
    if (!italicState) {
        texto.style.fontStyle = "italic";
        italicState = true;
    } else {
        texto.style.fontStyle = "normal";
        italicState = false;
    }
});

// Evento para dar formato de subrayado al texto
btnUnderline.addEventListener('click', () => {
    if (!underlineState) {
        texto.style.textDecoration = "underline";
        underlineState = true;
    } else {
        texto.style.textDecoration = "none";
        underlineState = false;
    }
});

// Evento para guardar el texto
btnGuardar.addEventListener('click', () => {
    let valor = texto.value;

    const formato = {
        bold: boldState,
        italic: italicState,
        underline: underlineState
    };

    const textoConFormato = {
        texto: valor,
        formato: formato
    };

    arrayTextos.push(textoConFormato);
    mostrarTextos();
});

// Evento para eliminar todo el texto guardado
btnEliminar.addEventListener('click', () => {
    arrayTextos.splice(0, arrayTextos.length);
    mostrarTextos();
});

// Evento para limpiar el texto de la interfaz
btnLimpiar.addEventListener('click', () => {
    texto.value = "";
});

// Función para mostrar los textos guardados
function mostrarTextos() {
    textosGuardados.innerHTML = '';
    arrayTextos.forEach(function(elemento) {
        let textoConFormato = elemento.texto;

        if (elemento.formato.bold) {
            textoConFormato = "<strong>" + textoConFormato + "</strong>";
        }
        if (elemento.formato.italic) {
            textoConFormato = "<em>" + textoConFormato + "</em>";
        }
        if (elemento.formato.underline) {
            textoConFormato = "<u>" + textoConFormato + "</u>";
        }

        textosGuardados.innerHTML += `<div class="card border-0 col-12 mt-5">
            ${textoConFormato}
        </div>`;
    });
}


