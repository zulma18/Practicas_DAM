// var, let, const

//declaracion de variables con var
var nombre = "juan"
var nombre = "elias"
console.log(nombre)

function mifuncion(){
    var apellido = "segura"
    console.log(apellido)
}

mifuncion()

//declaracion con let
let numero = 10
console.log(numero)
numero = 1
console.log(numero)

if (true){
    let numero = 5
    if (true){
        let numero = 4
    }
}
console.log(numero)

//declaracion con const
const animal = "mishi"

if (true){
    const animal = "perro"
}

let boton = document.getElementById("boton")

boton.addEventListener('click', () => {
    alert("Hola bienvenido")
})

// if (confirm("Desea eliminar el archivo?")){
//     alert("Se elimino el archivo")
// }

let mensaje = prompt("escribe un mensaje")
console.log(mensaje)