import inicio_home from './views/InicioHome.js'
import { NotFound } from './views/NotFound.js';
import { description } from './views/Description.js';

let ROUTES = {
   
};
let rootElement = '';


  export const setRootElement = (newRouteElementValue) => {
    rootElement = newRouteElementValue;
  }
  
  export const setRoutes = (newRoutesValue) => {
    // optional Throw errors if routes isn't an object
    if(typeof newRoutesValue === "object"){
 if(newRoutesValue['/NotFound']){
    ROUTES = newRoutesValue
 }
    }
       // optional Throw errors if routes doesn't define an /error route
    // assign ROUTES
  }

  const renderView = (pathname, props = {}) => {
    // clear the root element
    const root = rootElement;
    root.innerHTML = '';
    // find the correct view in ROUTES for the pathname
    //console.log(ROUTES[pathname]);
    if(ROUTES[pathname]){
        const template = ROUTES[pathname](props);
        root.appendChild(template);
       
    } else {
        root.appendChild(ROUTES['/NotFound'](props));
    }
    //console.log(template);
    // in case not found render the error view
    // render the correct view passing the value of props
    // add the view element to the DOM root element
  } 
  
  export const navigateTo = (pathname, props={}) => {
    // update window history with pushState
    const URLvisited= window.location.origin + pathname;
    history.pushState({}, "", URLvisited);
    // render the view with the pathname and props
    renderView(pathname, props);
  }
  
  export const onURLChange = (location) => {
    // parse the location for the pathname and search params
    // convert the search params to an object
    // render the view with the pathname and object
    renderView(location);
  }