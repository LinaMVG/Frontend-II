/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
    // Debemos seleccionar todos los botones de like
    // <i id="x123" class="fa fa-heart favorito"></i> // este es nuestro model de la etiqueta i
    const botonesDeLike  = document.querySelectorAll(".fa-heart")
    // console.log(botonesDeLike); // la lista de nodos esta correctamente capturada

    botonesDeLike.forEach( boton => {
        boton.addEventListener("click", function (evento) {
            console.log(evento);
            console.log(evento.target);
            // console.log(evento.target.classList);
            console.log(evento.target.id); // este es el atributo clave que me sirve para buscar en el array de albmuesFamosos
            let albumId = evento.target.id

            // paso siguiente ir a buscar en el array para cambiar el estado de album.like
            albumesFamosos.forEach( album => {
                if (album.id == albumId) {
                    console.log(`Coinciden los álbumes ${albumId} es igual al ${album.id}`); 
                    console.log(album.like);
                    
                    // nos queda cambiar la propiedad album.like al estado contrario del actual
                    // if (album.like == false) {
                    //     album.like = true
                    // } else {
                    //     album.like = false                        
                    // }

                    // refactorizamos el condicional anterior para que quede mas elegante en una sola linea
                    album.like = !album.like 
                    console.log(`cambiamos la propiedad a ${album.like}`);
                }
            })

            // Renderizar (pintar) nuevamente las tarjetas para que se pinte los like de los álbumes
            renderizarAlbumes(albumesFamosos) // pintamos nuevamente todas dlas tarjetas con la info actualizada de albumesFamosos
            mostrarDatosEnPerfil(albumesFamosos) // es necesario actualizar los datos de mi playlist

            // Recursividad: para agreagar nuevamente el listener para seguir ~escuchado el eveto de los botones cada vez que apriete cualquiera de ellos
            marcarFavorito() // es decir que agrego nuevamente los eventos a los botones renderizados en la linea 41
        })
    })    
}
marcarFavorito()



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario presiona la tecla f ✅
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario para que ingrese el nombre del album que desea eliminar✅
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

// window.addEventListener("keydown" , function (event) { // keydown todas las teclas del teclado
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
// })

window.addEventListener("keypress", eliminarAlbum) // keypress solo toma teclas alfanumericas

function normalizeString(str) {
    return str.split(/\s+/).join(' ').trim().toLowerCase();
}


function eliminarAlbum(event) {
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    
    if(event.key.toLowerCase() === 'f'){
        let nombreAlbum = prompt('Ingresa el nombre del album a eliminar: ').trim()

        nombreAlbum = normalizeString(nombreAlbum);

        if (nombreAlbum){

            let indexAlbum = albumesFamosos.findIndex(album => normalizeString(album.nombre) === nombreAlbum);
            if (indexAlbum !== -1) {
                albumesFamosos.splice(indexAlbum, 1);
                console.log(`Álbum ${nombreAlbum} eliminado.`);
                
                renderizarAlbumes(albumesFamosos);
                mostrarDatosEnPerfil(albumesFamosos); 
    
                marcarFavorito();
            } else {
                alert(`No se encontró el álbum: "${nombreAlbum}".`);
            }
        } else{
            alert('Por favor, ingresa un nombre de álbum válido.')
            eliminarAlbum({ key: 'f' });
        }

    }
}

eliminarAlbum()