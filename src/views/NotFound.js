import { navigateTo } from "../router.js";

export const NotFound = () => {
    
    //AGREGARLE CLASS A BODY PARA CAMBIAR EL COLOR EL CSS
    const body = document.body;
    body.setAttribute('class', "ruta-error");

    //METER LOS ELEMENTOS DE LA VISTA ERROR
    const div_nuevo = document.createElement('div');
    div_nuevo.setAttribute('id', 'viewError');
    
    const imagen_error = document.createElement('img');
    imagen_error.setAttribute('src', "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Personajes%20MK/logo-MK-icono.png")
    imagen_error.setAttribute('id', 'logoError');

    const parrafoUPS = document.createElement('p');
    parrafoUPS.setAttribute('id', 'UPS')
    parrafoUPS.textContent = "¡UPS!"

    const parrafoError = document.createElement('p');
    parrafoError.setAttribute('id', 'ERROR')
    parrafoError.textContent = "ERROR 404"

    const parrafoDescription = document.createElement('p');
    parrafoDescription.setAttribute('id', 'DescripError')
    parrafoDescription.textContent = "No hemos podido encontrar la página que buscas."

    const btnVolver = document.createElement('button');
    btnVolver.setAttribute('id', 'BtnVolver')
    btnVolver.textContent = "Volver al inicio"
    btnVolver.addEventListener('click', VolverInicio);

    function VolverInicio () {
        navigateTo("/");
    }

    div_nuevo.appendChild(imagen_error);
    div_nuevo.appendChild(parrafoUPS);
    div_nuevo.appendChild(parrafoError);
    div_nuevo.appendChild(parrafoDescription);
    div_nuevo.appendChild(btnVolver);

    return (div_nuevo);
    };