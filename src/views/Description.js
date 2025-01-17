import { chat } from "../components/Chatcomponente.js";
import { btnHome } from "../components/btnHome.js";
import { header } from "../components/header.js";
import { div_filtros } from "../components/DivFiltros.js";

export const description = (props) => {

  //METER LOS ELEMENTOS DE LA VISTA ERROR
  const div_description = document.createElement("div");
  div_description.setAttribute("id", "viewDescription");

  const div_descriptionSecundario = document.createElement("div");
  div_descriptionSecundario.setAttribute("id", "viewDescriptionSecundario");

  const img_descriptionFondo = document.createElement("img");
  img_descriptionFondo.setAttribute(
    "src",
    "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/tarjetas%20MK-1.jpg",
  );
  img_descriptionFondo.setAttribute("id", "imgDescriptionFondo");

  //CREACION DE IMAGEN
  const img_descriptionPersonaje = document.createElement("img");
  img_descriptionPersonaje.setAttribute("id", "imgDescriptionPersonaje");
  img_descriptionPersonaje.src = props.imageUrl;

  //CREACION DE DIV PARA PARRAFO NOMBRE
  const div_descriptionNombre = document.createElement("div");
  div_descriptionNombre.setAttribute("id", "divNombre");

  const parrafoNombre = document.createElement("p");
  parrafoNombre.setAttribute("id", "nombre");
  parrafoNombre.textContent = props.name;
  div_descriptionNombre.appendChild(parrafoNombre);

  //CREACION DE DIV PARA DETALLE
  const div_descriptionDetalle = document.createElement("div");
  div_descriptionDetalle.setAttribute("id", "divDetalle");

  //CREACION PARRAFO DESCRIPCION
  const parrafoDescription = document.createElement("p");
  parrafoDescription.setAttribute("id", "description");
  parrafoDescription.textContent = props.shortDescription;
  div_descriptionDetalle.appendChild(parrafoDescription);

  //CREACION PARRAFO HABILIDADES
  const parrafoHabilidades = document.createElement("p");
  parrafoHabilidades.setAttribute("id", "skills");
  parrafoHabilidades.textContent = "Habilidades: " + props.facts.skills;
  div_descriptionDetalle.appendChild(parrafoHabilidades);

  //CREACION PARRAFO ARMAS
  const parrafoArmas = document.createElement("p");
  parrafoArmas.setAttribute("id", "armas");
  parrafoArmas.textContent = "Armas: " + props.facts.weapons;
  div_descriptionDetalle.appendChild(parrafoArmas);

  //CREACION PARRAFO APARICION VIDEOJUEGOS
  const parrafoApariciones = document.createElement("p");
  parrafoApariciones.setAttribute("id", "apariciones");
  parrafoApariciones.textContent =
    "Apariciones en videojuegos: " + props.videogamesAppearances;
  div_descriptionDetalle.appendChild(parrafoApariciones);

  //CREACION DIV LETALIDAD
  const div_letalidad = document.createElement("div");
  div_letalidad.setAttribute("id", "divLetalidad");
  const img_letalidad = document.createElement("img");

  if(props.facts.lethalityLevel === 'Alto'){
    img_letalidad.setAttribute(
      "src",
      "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/alto.png",
    )
  } else if(props.facts.lethalityLevel === 'Moderado'){
    img_letalidad.setAttribute(
      "src",
      "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/moderado.png",
    )
  } else if(props.facts.lethalityLevel === 'Moderado-bajo'){
    img_letalidad.setAttribute(
      "src",
      "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/moderado-bajo.png",
    )
  } else if(props.facts.lethalityLevel === 'Bajo')
  img_letalidad.setAttribute(
    "src",
    "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/bajo.png",
  );
  img_letalidad.setAttribute("id", "imgLetalidad");
  div_letalidad.appendChild(img_letalidad);
  const parrafoLetalidad = document.createElement("p");
  parrafoLetalidad.setAttribute("id", "parrafoLetalidad");
  parrafoLetalidad.textContent = "Letalidad: " + props.facts.lethalityLevel;
  div_letalidad.appendChild(parrafoLetalidad);

  //CREACION DIV REINO
  const div_reino = document.createElement("div");
  div_reino.setAttribute("id", "divReino");
  const img_reino = document.createElement("img");
  if(props.facts.kingdom === 'Earthrealm'){
    img_reino.setAttribute(
      "src",
      "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/earthrealm.png",
    );
  } else if (props.facts.kingdom === 'Outworld'){
  img_reino.setAttribute(
    "src",
    "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/outworld.png",
  )} else if(props.facts.kingdom === 'Cielo'){
    img_reino.setAttribute(
      "src",
      "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/cielo.png",
    )
  } else {
    img_reino.setAttribute(
      "src",
      "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse-chat/main/Dataverse-Chat-Recursos/netherrealm.png",
    )
  }
  img_reino.setAttribute("id", "imgReino");
  div_reino.appendChild(img_reino);
  const parrafoReino = document.createElement("p");
  parrafoReino.setAttribute("id", "parrafoReino");
  parrafoReino.textContent = "Reino: " + props.facts.kingdom;
  div_reino.appendChild(parrafoReino);

  //CREACION DIV TIULO CHAT
  const divTitulo = document.createElement("div");
  divTitulo.setAttribute("id", "divTitulo");

  //CREACION DE PARRAFO CHAT
  const parrafo = document.createElement("p");
  parrafo.setAttribute("id", "parrafoTitulo");
  parrafo.textContent = "Chatea con " + props.name;
  divTitulo.appendChild(parrafo);

  div_description.appendChild(header());
  div_description.appendChild(div_filtros());
  div_description.appendChild(btnHome());
  div_descriptionSecundario.appendChild(img_descriptionFondo);
  div_descriptionSecundario.appendChild(img_descriptionPersonaje);
  div_descriptionSecundario.appendChild(div_descriptionNombre);
  div_descriptionSecundario.appendChild(div_descriptionDetalle);
  div_descriptionSecundario.appendChild(div_letalidad);
  div_descriptionSecundario.appendChild(div_reino);
  div_descriptionSecundario.appendChild(divTitulo);
  div_descriptionSecundario.appendChild(chat(props));

  div_description.appendChild(div_descriptionSecundario);

  return div_description;
};
