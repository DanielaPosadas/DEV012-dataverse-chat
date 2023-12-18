let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRouteElementValue) => {
  rootElement = newRouteElementValue;
};

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/NotFound"]) {
      ROUTES = newRoutesValue;
    }
  }
};
const renderView = (pathname, props = {}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = "";
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id") || "";

  if (ROUTES[pathname]) {
    const template = ROUTES[pathname]({ ...props, id });
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/NotFound"](props));
  }
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  let URLvisited = window.location.origin + pathname;
  if (props.id) {
    URLvisited += `?id=${props.id}`;
  }
  history.pushState({}, "", URLvisited);
  renderView(pathname, { ...props });
};

export const onURLChange = (location) => {
  // const sitioVisitado= window.location.origin + pathname;

  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location);
};
