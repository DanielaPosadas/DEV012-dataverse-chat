// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

import inicio_home from './views/InicioHome.js'
import { setRootElement, setRoutes, onURLChange } from './router.js';
import { NotFound } from './views/NotFound.js';
import { description } from './views/Description.js';

const routes = {
    "/": inicio_home,
    "/error" : NotFound,
    "/description": description,

}
const viewContainer = document.getElementById('root');

setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
    onURLChange(event.target.location.pathname);
  });

