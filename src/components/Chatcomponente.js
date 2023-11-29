export const chat = () => {
    
const divContenedor = document.createElement('div');
divContenedor.setAttribute('id', 'divContenedor'); 
const div = document.createElement('div');
div.setAttribute('id', 'divChatComponente');

const form = document.createElement('form');
const divMensaje = document.createElement('div'); 
divMensaje.setAttribute('id', 'divMensaje'); 
const input = document.createElement('input'); 
input.setAttribute('type', 'text');
input.setAttribute('id', 'input'); 
input.setAttribute('placeholder', 'Escribe tu mensaje...');
form.appendChild(input); 

const btnEnviar = document.createElement('button');
btnEnviar.setAttribute('id', 'btnChat'); 
btnEnviar.textContent='Enviar';
form.appendChild(btnEnviar); 
divMensaje.appendChild(form); 

divContenedor.appendChild(div);
divContenedor.appendChild(divMensaje);

    return divContenedor;
}