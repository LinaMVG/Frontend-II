
let marcador = {
    usuario: 0,
    computadora: 0,
    empate: 0
}

// Paso 1) preguntar ¿cómo se llama el usuario?
const nombreJugador = iniciarJuego()

// Paso 2) Evaluar mientras ninguno de los jugadores sume mas de 2 en el score volvemos a iniciar el bucle
while (marcador.usuario < 2 && marcador.computadora < 2) {
    // llamamos a la funcion que evalua las jugadas
    const RESULTADO_PARTIDA = compararJugadas()
    alert(RESULTADO_PARTIDA)
    console.log(RESULTADO_PARTIDA)
    
    // Ahora debo incrementar el Score
    // para ello evaluo si el mensaje de RESULTADO_PARTIDA, contiene ganaste, perdiste o empataste
    if (RESULTADO_PARTIDA.includes("ganaste") ) {
        marcador.usuario++
    } else if(RESULTADO_PARTIDA.includes("perdiste")) {
        marcador.computadora++        
    }else if(RESULTADO_PARTIDA.includes("empate")) {
        marcador.empate++   
        marcador.computadora++
        marcador.usuario++    
       
    }
    alert(`El resultado de la ronda fue: \nMarcador del Usuario: ${marcador.usuario}\nMarcador del Computador: ${marcador.computadora}\nEmpates: ${marcador.empate}`)
    //console.log(`El resultado de la ronda fue: \nMarcador del Usuario: ${marcador.usuario}\nMarcador del Computador: ${marcador.computadora}`)
}
// alert(`Juego terminado. Resultados finales:\nPartidas jugadas: ${marcador.usuario + marcador.computadora + marcador.empates}\nGanaste: ${marcador.usuario} partidas\nPerdiste: ${marcador.computadora} partidas\nEmpataste: ${marcador.empates} partidas`)
alert(`El juego ha terminado. Aquí está el resumen final:\n
Partidas ganadas por ${nombreJugador}: ${marcador.usuario}
Partidas perdidas por ${nombreJugador}: ${marcador.computadora}
Empates: ${marcador.empate}
Total de partidas jugadas: ${marcador.usuario + marcador.computadora -marcador.empate}`)

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.