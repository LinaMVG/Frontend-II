/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
// function iniciarJuego() {
//     // Saludar al visitante
//     alert("Bienvenidos al popular juego de Piedra, Papel o Tijera de Frontend2")

//     // Guardadr en una variable o constante.
//     // const nombre = prompt("¿Cuál es tu nombre?") // el valor no le podría asignar con un nombre nuevo
//     // var nombre = prompt("¿Cuál es tu nombre?") // no se recomienda usarlo, preferible usar let
//     let nombre = prompt("¿Cuál es tu nombre?")

//     // alert("¡Hola estimado desarrollador! " + nombre + ", Mucha suerte🍀")
//     alert(`¡Hola estimado desarrollador! ${nombre}, Mucha suerte🍀`)

//     // Mostramos datos en consola
//     console.log("-------------------------")
//     console.log("El nombre del jugador es:")
//     console.log(nombre)
//     console.log("-------------------------")

//     return nombre
// }

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


function iniciarJuego(){
    let name = nombreValido();

    name = name.toUpperCase();
    alert(`¡Hola, ${name}! Bienvenido al juego.`);
}

function nombreValido(){
    let name = prompt("Por favor, ingresa tu nombre:")

    if(!isNaN(name) || name.length<3){
        alert("El nombre debe tener al menos 3 caracteres. Por favor, intenta nuevamente.");
        return nombreValido()
    }
    return name
}

iniciarJuego()




