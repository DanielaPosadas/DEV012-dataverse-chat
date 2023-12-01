//import { componentePeticion } from "../peticion.js";
import dataset from "../data/dataset.js";
//import { apikey } from "../views/apikey.js";

export const chat = () => {
    
const divContenedor = document.createElement('div');
divContenedor.setAttribute('id', 'divContenedor');


//AGREGAR UL AL DIV GENERAL
const ulMensajes = document.createElement('ul');
ulMensajes.setAttribute('id', 'ulMensajes');
divContenedor.appendChild(ulMensajes);

//CREAR LI's PARA MENSAJES
const liBoot = document.createElement('li');
liBoot.classList.add('chat', 'liBoot');
ulMensajes.appendChild(liBoot);

//AGREGAR UN TEXTAREA A DIV PARA INGRESAR MENSAJES
const div = document.createElement('div');
div.setAttribute('id', 'divChatComponente');
div.setAttribute('class', 'chatTexto');
const mensajeTextarea = document.createElement('textarea');
mensajeTextarea.setAttribute('id', 'mensajeTextarea');
mensajeTextarea.setAttribute('placeholder', 'Escribe tu mensaje...');
const SpanEnviar = document.createElement('span');
SpanEnviar.setAttribute('class', 'material-symbols-outlined')
SpanEnviar.setAttribute('id', 'SpanEnviar');
SpanEnviar.textContent = 'send';

div.appendChild(mensajeTextarea);
div.appendChild(SpanEnviar);

divContenedor.appendChild(div);

//PETICION API OPEN AI
const btnEnviarSpan = div.querySelector('#SpanEnviar');
const textarea = div.querySelector('#mensajeTextarea');
const ulMessage = divContenedor.querySelector('#ulMensajes');

let userMessage;
const createChat = (message, className) => {
const chatLi = document.createElement('li');
chatLi.classList.add('chat', className);

//AGREGAR PARRAFO DE MENSAJE USER A LI
const pMensajeUser = document.createElement('p');
pMensajeUser.setAttribute('class', 'pMensajeUser');
pMensajeUser.textContent = message;

const pMensajeBoot = document.createElement('p');
pMensajeBoot.setAttribute('class', 'pMensajeBoot');
pMensajeBoot.textContent = message;


if (className === 'liUser'){
    chatLi.appendChild(pMensajeUser);
} else {chatLi.appendChild(pMensajeBoot)}

return chatLi;
}

//CARGAR EL DIV QUE CONTIENE TODA LA VISTA
const API_KEY_VISIBLE = localStorage.getItem('apiKey');

//CONFIGURAR LA APIKEY A LA OPENAI
const generateAPI = (mensajeChatboot) => {
    const URL_API = 'https://api.openai.com/v1/chat/completions';
    let API_KEY = API_KEY_VISIBLE;
    const mensajeElemento = mensajeChatboot.querySelector('.pMensajeBoot');

const peticion = {
  method: "POST",
  headers: {'Content-Type': "application/json",
  Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: userMessage }]
  }),
}
fetch(URL_API, peticion).then(resp => resp.json()).then(data => {
    mensajeElemento.textContent = data.choices[0].message.content
}).catch((error) => {
    mensajeElemento.textContent = 'Ups! Algo malo ocurrió. Por favor intenta de nuevo.'
})
}

//AGREGA EVENTO AL BOTON ENVIAR DE CADA CHAT
btnEnviarSpan.addEventListener('click', inputTextarea);
function inputTextarea(){
    userMessage = textarea.value.trim();
    if(!userMessage) return;

    ulMessage.appendChild(createChat(userMessage, 'liUser'));

    setTimeout(() => {
        const mensajeChatboot = createChat('Thinking...', 'liBoot')
        ulMessage.appendChild(mensajeChatboot);
        generateAPI(mensajeChatboot)
    }, 600); 
}
divContenedor.addEventListener("DOMContentLoaded", prueba );
//CAMBIAR EL VALOR DE LA APIKEY SI ES NULL
function prueba(){
if(API_KEY_VISIBLE === null){
localStorage.setItem('apiKey', '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');
}};
console.log(API_KEY_VISIBLE);
    return divContenedor;
}