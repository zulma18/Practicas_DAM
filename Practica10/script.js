// script.js

const parrafos = document.querySelectorAll('.parrafo');
// getElementsbyClassName('parrafo')
// const input = document.querySelector('.input');
const app = document.getElementById('app');
const boton = document.getElementById('boton');

console.log(parrafos);
console.log(app);

parrafos[0].textContent += ' editado';

app.innerHTML += `
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
`;

boton.addEventListener('click', () => {
    parrafos.forEach(parrafo => {
        parrafo.style.color = 'red';
    });
});
