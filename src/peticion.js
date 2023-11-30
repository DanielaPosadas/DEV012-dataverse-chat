import { chat } from "./components/Chatcomponente.js";

export const componentePeticion = () => {

const prueba = chat();
const textareavalue = document.querySelector('#mensajeTextarea')

const URL_API = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';

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
console.log(data);
}).catch((error) => {
console.log(error)
})
}


