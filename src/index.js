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
import {dataset} from '../lib/dataAPI.js'
inicio_home(dataset);
//const view1 = document.querySelector('body')
//view1.appendChild(inicio_home());
//view1.appendChild(div);