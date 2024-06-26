// 🚩 Primero que nada vamos a enlazar el HTML con este nuevo script y a su vez
// vamos a comentar la linea que lo vincula con el script de la clase 11.
// La idea es desarrollar en este script las nuevas y mejoradas funcionalidades.

/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: Consulta a la API                       */
/* -------------------------------------------------------------------------- */
// En este caso vamos a consultar a un servidor del cual nos vamos a traer la data.
// Esta API tiene su documentación en: const boton = document.querySelector('button');
// Vamos a implementar el endpoint que nos devuelve comentarios para mostrarlos en pantalla.
// function consultaApi(endpoint) {
// //   console.log(endpoint);

//   // ir a buscar los datos en la API
//   fetch(endpoint)
//     .then( respuestaAPI => {
//         console.log(respuestaAPI);

//         if (!respuestaAPI.ok) {
//             return Promise.reject(respuestaAPI)
//         }

//         // respuestaAPI recuerden que deben parsearlo para poder jugar con el objeto literal de js
//         return respuestaAPI.json()
//     })
//     .then( data => {
//         console.log(data);
//         renderizarElementos(data)
//     })
//     .catch( error => console.log(error))
// }

async function consultaApi(endpoint) {
    try {
      const respuestaAPI = await fetch(endpoint);
    //   console.log(respuestaAPI);
  
      if (!respuestaAPI.ok) {
        throw (`Error: ${respuestaAPI.status} - ${respuestaAPI.statusText} -> estas usando esta Url: ${respuestaAPI.url}`)
      }
  
      const data = await respuestaAPI.json();
    //   console.log(data);
      
      const diezComentarios = data.slice(0, 10);
      renderizarElementos(diezComentarios);

    } catch (error) {
      console.log(error);
    }
  }


/* -------------------------------------------------------------------------- */
/*                      [5] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
// Vamos a reimplementar la escucha del click lanzar las nuevas funciones.
const boton = document.querySelector('button');
const url = "https://jsonplaceholder.typicode.com/comments" // url correcta
// const url = "https://jsonplaceholder.typicode.com/commentss" // url incorrecta
// const url = "https://jsonplaceholder.typicode.com/posts" // si utilizan paginacion en la consulta de la API utilicen este endpoint

boton.addEventListener("click", () => { 
    console.log("🚩Se hizo click para ver comentarios...");

    consultaApi(url)

    console.log("🚩Fin de la carga de comentarios...");
 })


/* -------------------------------------------------------------------------- */
/*                      [6] FUNCION: renderizar elementos                     */
/* -------------------------------------------------------------------------- */
// Acá vamos a reutilizar la función de renderizar renderizarElementos, implementando
// el .map() y .join() para obtener el resultado esperado.

function renderizarElementos(listado){
    // console.log(listado);

    const comentarios = document.querySelector(".comentarios");
    comentarios.innerHTML = "";
    // desarrollar la funcion 👇
    const comentariosRenderizados = listado.map((comentario) => {
        return `<div class="comentario">
            <h4>${comentario.email}</h4>
            <p>${comentario.body}</p>
        </div>`
    })
    // console.log(comentariosRenderizados);

    comentarios.innerHTML = comentariosRenderizados.join("")

    boton.style.display = 'none'

}

/* ----------------------------- Mesa de trabajo ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                              Mejoras de código                             */
/* -------------------------------------------------------------------------- */
// En este caso no debemos desarrollar una nueva funcionalidad necesariamente. Aunque
// siempre que lo creas necesario va a estar bien modularizar en funciones el código.
// Queda a criterio del grupo generar o no nuevas funciones.
// En este caso deberan cumplir con nuevos requerimientos que necesita la aplicación.
// 1- En el caso de la consulta a la API, si la misma no es satisfactoria, deberá arrojar
// un error que se le muestre al usuario.
// 2- Para lograr ver el error podemos forzarlo modificando el endpoint incorrectamente,
// para detectar y arrojar el error deben implementar el bloque try().catch()
// 3- Si los comentarios llegan y se cargan correctamente, el botón de "Ver comentarios" debe desaparecer de la interfaz. Así evitamos que se vuelva a llamar a la API.
// 4- Solo deben cargarse los primeros 10 comentarios que nos llegan.
