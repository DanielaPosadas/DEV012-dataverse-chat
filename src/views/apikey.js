import { btnHome } from "../components/btnHome.js";
import { header } from "../components/header.js";

export const apikey = () => {
    //DIV CONTENEDOR
    const divApikey = document.createElement('div');
    divApikey.setAttribute('id', 'divApikey');

    //IMAGEN DE FONDO
    const imgFondoApikey = document.createElement('img');
    imgFondoApikey.setAttribute('id', 'imgFondoApikey');
    imgFondoApikey.src = 'https://img.freepik.com/foto-gratis/fondo-rojo-grunge_1048-8960.jpg?w=1380&t=st=1700177002~exp=1700177602~hmac=7303db24464e6a2c956aeaac0c6433bae02689c745b2106eaa680164b0ba96c0';

    //DIV INPUT
    const parrafoApikey = document.createElement('p');
    parrafoApikey.setAttribute('id', 'parrafoApikey');
    parrafoApikey.textContent = "Ingresa la clave";

    //DIV INPUT Y BOTONES
    const divInput = document.createElement('div');
    divInput.setAttribute('id', 'divInput');
    
    //DIV BOTONES
    const divBotones = document.createElement('div');
    divBotones.setAttribute('id', 'divBotones');
    
    //INPUT PARA INGRESAR API
    const inputApikey = document.createElement('input');
    inputApikey.setAttribute('id', 'inputApikey');
    inputApikey.setAttribute('placeholder', 'Escribe aquí...');

    //BOTONES
    const btnApikeyEnviar = document.createElement('button');
    btnApikeyEnviar.setAttribute('id', 'btnApikeyEnviar');
    btnApikeyEnviar.textContent = "Enviar";
    const btnApikeyLimpiar = document.createElement('button');
    btnApikeyLimpiar.setAttribute('id', 'btnApikeyLimpiar');
    btnApikeyLimpiar.textContent = "Limpiar";
    divBotones.appendChild(btnApikeyEnviar);
    divBotones.appendChild(btnApikeyLimpiar);
    
    divInput.appendChild(inputApikey);
    divInput.appendChild(divBotones);
    divInput.appendChild(parrafoApikey)
    

    divApikey.appendChild(header());
    divApikey.appendChild(btnHome());
    divApikey.appendChild(imgFondoApikey);
    divApikey.appendChild(divInput);
    
    return divApikey;
};