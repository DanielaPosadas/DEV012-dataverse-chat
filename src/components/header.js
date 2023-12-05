/*<header> 
    <img id="header" src="https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/logo%20MK-grande.png">
    <img id="header2" src="https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Personajes%20MK/logo-MK-icono.png">
    <h1>Escojan bien sus batallas, si escogen una pelea asegurende se poder terminarla.</h1>
  </header>*/

  export const header = () => {
    
    const header = document.createElement('header');

    const imagen1 = document.createElement('img');
    imagen1.setAttribute('id', "header");
    imagen1.setAttribute('src', "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/logo%20MK-grande.png")

    const imagen2 = document.createElement('img');
    imagen2.setAttribute('id', "header2");
    imagen2.setAttribute('src', "https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Personajes%20MK/logo-MK-icono.png")

    header.appendChild(imagen1);
    header.appendChild(imagen2);
    
    return header;
    };
