import { chat } from "./components/Chatcomponente.js";

export const componentePeticion = () => {
  const divChatInvisible = document.createElement('div');
  divChatInvisible.appendChild(chat()); 

const textareavalue = divChatInvisible.querySelector('#mensajeTextarea')

const generateAPI = (mensajeChatboot) => {
  //let mensaje = userMessage;
  //componentePeticion(mensaje)
  const URL_API = 'https://api.openai.com/v1/chat/completions';
  const API_KEY = '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';
  const mensajeElemento = mensajeChatboot.querySelector('.pMensajeBoot');

const peticion = {
method: "POST",
headers: {'Content-Type': "application/json",
Authorization: `Bearer ${API_KEY}`,
},
body: JSON.stringify({
  model: "gpt-3.5-turbo",
  messages: [{ role: "system", content: textareavalue.value }]
}),
}
fetch(URL_API, peticion).then(resp => resp.json()).then(data => {
  mensajeElemento.textContent = data.choices[0].message.content
}).catch((error) => {
  mensajeElemento.textContent = 'Ups! Algo malo ocurrió. Por favor intenta de nuevo.'
})
}
return generateAPI; 
}


