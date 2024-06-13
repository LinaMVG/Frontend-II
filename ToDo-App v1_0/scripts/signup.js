window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0]
    const name = document.querySelector("#inputNombre")
    const lastName = document.querySelector("#inputApellido")
    const email = document.querySelector("#inputEmail")
    const password = document.querySelector("#inputPassword")
    const passwordRepeat = document.querySelector("#inputPasswordRepetida")
    const url = "https://todo-api.digitalhouse.com/v1"


    

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        if (password.value !== passwordRepeat.value) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const payload = {
            name:name.value,
            lastName:lastName.value,
            email: email.value,
            password: password.value,
            // passwordRepeat: passwordRepeat.value,
        }

        const settings = {
            method: "POST",
            body: JSON.stringify(payload), 
            headers: {
                "content-type": "application/json"
            }
        }

        realizarRegister(settings)

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    async function realizarRegister(settings) {
        // try {
        //     const response = await fetch(`${url}/users`, settings);

        //     if (!response.ok) {
        //         const errorData = await response.json();
        //         console.log("Error data:", errorData);
        //         throw new Error(response.status);
        //         // throw response;
        //     }

        //     const data = await response.json();
        //     console.log(data);
        //     console.log(data.jwt);

        //     if (data.jwt) {
        //         localStorage.setItem("jwt", JSON.stringify(data.jwt));
        //         form.reset();
        //         location.replace("./mis-tareas.html");
        //     }
        // } catch (error) {
        //     console.log(error.status);

        //     if (error.status === 400) {
        //         console.warn(`Error ${error.status}: El usuario ya se encuentra registrado  | Alguno de los datos requeridos está incompleto`);
        //         alert("El usuario ya se encuentra registrado o hay datos requeridos incompletos");
        //     } else {
        //         console.error("Error del servidor | url no existe");
        //         alert("Error del servidor o url no existe, comúniquese con el proveedor");
        //     }
            
        // }


        fetch(`${url}/users`, settings)
        .then( response => {
            console.log(response);
            
            if (response.ok) {
                return response.json()
            }

            return Promise.reject(response)

        })
        .then( data => { 
            console.log(data);
            console.log(data.jwt);

            if (data.jwt) {
                localStorage.setItem("jwt", JSON.stringify(data.jwt))

                form.reset() 

                location.replace("./mis-tareas.html")
            }
        })
        .catch( err => {
            console.log(err.status); 


            if (err.status == 400) {
                console.warn(`Error ${err.status}: El usuario ya se encuentra registrado  | Alguno de los datos requeridos está incompleto`);
                alert("El usuario ya se encuentra registrado o hay datos requeridos incompletos")
            } else {
                console.error("Error del servidor | url no existe")
                alert("Error del servidor o url no existe, comúniquese con el proveedor")
            }
        })        



     };
});