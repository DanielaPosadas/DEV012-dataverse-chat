import { header } from "../components/header.js";
import dataset from "../data/dataset.js";

export const description = (props) => {
console.log('props', props);
//AGREGARLE CLASS A BODY PARA CAMBIAR EL COLOR EL CSS
const body = document.body;
body.setAttribute('class', "ruta-description");

//METER LOS ELEMENTOS DE LA VISTA ERROR
const div_description = document.createElement('div');
div_description.setAttribute('id', 'viewDescription');

const img_descriptionFondo = document.createElement('img');
img_descriptionFondo.setAttribute('src', 'https://img.freepik.com/foto-gratis/fondo-rojo-grunge_1048-8960.jpg?w=1380&t=st=1700177002~exp=1700177602~hmac=7303db24464e6a2c956aeaac0c6433bae02689c745b2106eaa680164b0ba96c0');
img_descriptionFondo.setAttribute('id', 'imgDescriptionFondo');

const img_descriptionPersonaje = document.createElement('img');
img_descriptionPersonaje.setAttribute('id', 'imgDescriptionPersonaje');
img_descriptionPersonaje.setAttribute('src', 'https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/tarjetas%20MK-2.jpg');

//const data_personajes = dataset;

/*const renderImages = (data_personajes) => {

const li_personaje = document.createElement('li');

data_personajes.forEach(item => {
const img_descriptionPersonaje = document.createElement('img');
img_descriptionPersonaje.setAttribute('id', 'imgDescriptionPersonaje');
img_descriptionPersonaje.src = item.imageUrl;

li_personaje.appendChild(img_descriptionPersonaje)
    });
return li_personaje
};*/

div_description.appendChild(header());
div_description.appendChild(img_descriptionFondo);
div_description.appendChild(img_descriptionPersonaje);
//div_description.appendChild(renderImages(data_personajes));

return (div_description);

};