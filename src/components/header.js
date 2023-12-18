
import { navigateTo } from "../router.js";

export const header = () => {

  const header = document.createElement('header');

  const imagen1 = document.createElement('img');
  imagen1.setAttribute('id', "header");
  imagen1.setAttribute('src', "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/logo%20MK-grande.png")

  const imagen2 = document.createElement('img');
  imagen2.setAttribute('id', "header2");
  imagen2.setAttribute('src', "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Personajes%20MK/logo-MK-icono.png")


  imagen2.addEventListener('click', function () {
    navigateTo('/');
  });

  header.appendChild(imagen1);
  header.appendChild(imagen2);

  return header;
};
