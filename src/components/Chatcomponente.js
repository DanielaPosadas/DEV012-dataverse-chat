//import { componentePeticion } from "../peticion.js";
import dataset from "../data/dataset.js";
//import { apikey } from "../views/apikey.js";

export const chat = (props) => {

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

        if (className === 'liUser') {
            chatLi.appendChild(pMensajeUser);
        } else { chatLi.appendChild(pMensajeBoot) }

        return chatLi;
    }

    //CONFIGURAR LA APIKEY A LA OPENAI

    const generateAPI = (mensajeChatboot, props) => {
        const URL_API = 'https://api.openai.com/v1/chat/completions';
        const API_KEY = localStorage.getItem('apikey');
        const mensajeElemento = mensajeChatboot.querySelector('.pMensajeBoot');
        const nombres = props.name;
        console.log(API_KEY);
        const chatIndividual = [
            { role: "system", content: `Finge que eres ${props.name}` },
            { role: "user", content: userMessage }
        ];
        const chatGrupal = [
            { role: "system", content: 'Finge que eres cada uno de estos personajes: Kitana, Jade y nadie mas'},
            { role: "user", content: userMessage },
        ];
       // if (nombres === nombres) {
            const peticion1 = {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },

                body: JSON.stringify(
                    {
                        model: "gpt-3.5-turbo",
                        messages: chatIndividual,
                        temperature: 0.2
                    }
                ),
                usage: {
                    prompt_tokens: 10,
                    completion_tokens: 7,
                    total_tokens: 15,
                }
            }
            const peticion2 = {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },

                body: JSON.stringify(
                    {
                        model: "gpt-3.5-turbo",
                        messages: chatGrupal,
                        temperature: 0.2
                    }
                ),
                usage: {
                    prompt_tokens: 10,
                    completion_tokens: 7,
                    total_tokens: 15,
                }
            }


            fetch(URL_API,  peticion2)
                .then(resp => resp.json())
                .then(data => {
                    mensajeElemento.textContent = data.choices[0].message.content
                })
                .catch((error) => {
                    mensajeElemento.textContent = 'Ups! Algo malo ocurrió. Por favor intenta de nuevo.'
                })
       

    }
    //AGREGA EVENTO AL BOTON ENVIAR DE CADA CHAT
    btnEnviarSpan.addEventListener('click', inputTextarea);
    function inputTextarea() {
        userMessage = textarea.value.trim();
        if (!userMessage) return;

        ulMessage.appendChild(createChat(userMessage, 'liUser'));

        setTimeout(() => {
            const mensajeChatboot = createChat('Escribiendo...', 'liBoot')
            ulMessage.appendChild(mensajeChatboot);
            generateAPI(mensajeChatboot, props)
        }, 600);
    }
    return divContenedor;
}