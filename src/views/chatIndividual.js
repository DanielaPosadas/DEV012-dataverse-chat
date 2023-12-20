import { chat } from "../components/Chatcomponente.js";

export const chatIndividual = () => {
  const div_chatIndividual = document.createElement("div");
  div_chatIndividual.setAttribute("id", "divChatIndividual");

  const img_ChatFondo = document.createElement("img");
  img_ChatFondo.setAttribute(
    "src",
    "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/tarjetas%20MK-1.jpg",
  );
  img_ChatFondo.setAttribute("id", "imgChatFondo");

  div_chatIndividual.appendChild(img_ChatFondo);
  div_chatIndividual.appendChild(chat());
};
