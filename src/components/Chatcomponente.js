import { componentePeticion } from "../peticion.js";

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

    //AGREGA EVENTO AL BOTON ENVIAR DE CADA CHAT
    btnEnviarSpan.addEventListener('click', inputTextarea);
    function inputTextarea() {
        userMessage = textarea.value.trim();
        if (!userMessage) return;

        ulMessage.appendChild(createChat(userMessage, 'liUser'));

        setTimeout(() => {
            const mensajeChatboot = createChat('Escribiendo...', 'liBoot')
            ulMessage.appendChild(mensajeChatboot);
            componentePeticion(props, userMessage, mensajeChatboot);
        }, 600);
    }
    return divContenedor;
}