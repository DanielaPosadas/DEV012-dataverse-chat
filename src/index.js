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

import inicio_home from './views/Inicio-home.js'
import dataset from '../data/dataset.js'


//import { setRootElement, setRoutes } from './router.js';
//import { URLChange } from './router.js';
inicio_home(dataset);

/*const routes = {
    "/": inicio_home,
    "/error" : 'some',

}
const viewContainer = document.getElementById('root');
setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    console.log(event.target.location.pathname);
    URLChange(event.target.location.pathname);
  });*/

