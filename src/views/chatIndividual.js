import { chat } from "../components/Chatcomponente.js"

export const chatIndividual = () => {

    const div_chatIndividual = document.createElement('div');
    div_chatIndividual .setAttribute('id', 'divChatIndividual');

    const img_ChatFondo = document.createElement('img');
    img_ChatFondo.setAttribute('src', 'https://img.freepik.com/foto-gratis/fondo-rojo-grunge_1048-8960.jpg?w=1380&t=st=1700177002~exp=1700177602~hmac=7303db24464e6a2c956aeaac0c6433bae02689c745b2106eaa680164b0ba96c0');
    img_ChatFondo.setAttribute('id', 'imgChatFondo');


    div_chatIndividual.appendChild(img_ChatFondo);
    div_chatIndividual.appendChild(chat());



}