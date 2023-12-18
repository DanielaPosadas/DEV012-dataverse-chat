import { chat } from "../components/Chatcomponente.js";
import { div_filtros } from "../components/DivFiltros.js";
import { btnHome } from "../components/btnHome.js";
import { header } from "../components/header.js";
import dataset from "../data/dataset.js";

export const chatView = (props) => {
  console.log("props", props);
  const div = document.createElement("div");
  div.setAttribute("id", "divChat");
  const divSecundario = document.createElement("div");
  divSecundario.setAttribute("id", "divSecundario");
  const img_chatFondo = document.createElement("img");
  img_chatFondo.setAttribute(
    "src",
    "https://img.freepik.com/foto-gratis/fondo-rojo-grunge_1048-8960.jpg?w=1380&t=st=1700177002~exp=1700177602~hmac=7303db24464e6a2c956aeaac0c6433bae02689c745b2106eaa680164b0ba96c0",
  );
  img_chatFondo.setAttribute("id", "imgchatFondo");

  //CREACION DIV TIULO CHAT
  const divTituloGrupal = document.createElement("div");
  divTituloGrupal.setAttribute("id", "divTituloGrupal");
  //CREACION DE PARRAFO CHAT
  const parrafoTituloGrupal = document.createElement("p");
  parrafoTituloGrupal.setAttribute("id", "parrafoTituloGrupal");
  parrafoTituloGrupal.textContent = "Chat Grupal";
  divTituloGrupal.appendChild(parrafoTituloGrupal);
  //DIV VENTANA DE CONECTADOS
  const divParticipantes = document.createElement("div");
  divParticipantes.setAttribute("id", "divParticipantes");

  //DIV VACIO
  const divVacio = document.createElement("div");
  divVacio.setAttribute("id", "divVacio");
  //DIV NUMERO DE USUARIOS
  const divNumeroUsuarios = document.createElement("div");
  divNumeroUsuarios.setAttribute("id", "divNumeroUsuarios");
  const parraNumeroUsuarios = document.createElement("p");
  parraNumeroUsuarios.setAttribute("id", "parrafoNumeroUsuarios");
  parraNumeroUsuarios.textContent = "25 Conectados ";
  divNumeroUsuarios.appendChild(parraNumeroUsuarios);

  //DIV USUARIOS CONECTADOS
  const divUsuariosConectados = document.createElement("div");
  divUsuariosConectados.setAttribute("id", "divUsuariosConectados");
  dataset.forEach((props) => {
    const imagenConectados = document.createElement("img");
    imagenConectados.setAttribute("id", "imagenConectados");
    imagenConectados.src = props.imageUrl;
    divUsuariosConectados.appendChild(imagenConectados);
    const divEstadoOnline = document.createElement("div");
    divEstadoOnline.setAttribute("id", "divEstadoOnline");
    const parrafoOnline = document.createElement("p");
    parrafoOnline.setAttribute("id", "parrafoOnline");
    parrafoOnline.textContent = "Online";
    const parrafoNombrePersonaje = document.createElement("p");
    parrafoNombrePersonaje.setAttribute("id", "parrafoNombrePersonaje");
    parrafoNombrePersonaje.textContent = props.name;
    divEstadoOnline.appendChild(parrafoNombrePersonaje);
    divEstadoOnline.appendChild(parrafoOnline);
    divUsuariosConectados.appendChild(divEstadoOnline);
    const divPuntoVerde = document.createElement("div");
    divPuntoVerde.setAttribute("id", "divPuntoVerde");
    divUsuariosConectados.appendChild(divPuntoVerde);
  });

  //BOTÓN CONECTADOS
  const divBtnOnline = document.createElement("div");
  divBtnOnline.setAttribute("id", "divBtnOnline");
  const btn = document.createElement("button");
  btn.setAttribute("id", "btnOnline");
  const imageOnline = document.createElement("img");
  imageOnline.setAttribute("id", "imageHome");
  imageOnline.src = "https://cdn-icons-png.flaticon.com/512/1946/1946436.png";
  divBtnOnline.appendChild(btn);
  divBtnOnline.appendChild(imageOnline);

  divBtnOnline.addEventListener("click", listaConectados);

  function listaConectados() {
    if (divUsuariosConectados.style.display === "none") {
      divUsuariosConectados.style.display = "block";
      divNumeroUsuarios.style.display = "block";
    } else {
      divUsuariosConectados.style.display = "none";
      divNumeroUsuarios.style.display = "none";
    }
  }

  div.appendChild(header());
  div.appendChild(div_filtros());
  divSecundario.appendChild(divBtnOnline);
  divSecundario.appendChild(img_chatFondo);
  divSecundario.appendChild(btnHome());
  divSecundario.appendChild(divVacio);
  divSecundario.appendChild(chat(props));
  divSecundario.appendChild(divTituloGrupal);
  divSecundario.appendChild(divUsuariosConectados);
  divSecundario.appendChild(divNumeroUsuarios);

  div.appendChild(divSecundario);
  return div;
};
