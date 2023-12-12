
import dataset from "./data/dataset.js";

export const componentePeticion = (props, userMessage, mensajeChatboot) => {
    const URL_API = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = localStorage.getItem('apikey');
    const mensajeElemento = mensajeChatboot.querySelector('.pMensajeBoot');
    const historialmensajes = [];

    const iterarNombrePersonajes = dataset.map(nombres => nombres.name);
    
    const chatIndividual = [
        { role: "system", content: `Finge que eres ${props.name}` },
        { role: "user", content: userMessage }
    ];

    const chatGrupal = [
        { role: "system", content: `Finge que eres todos estos personajes ${iterarNombrePersonajes}`},
        { role: "user", content: userMessage}
    ];

    historialmensajes.push(chatGrupal);
    console.log(historialmensajes);
  
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
                    temperature: 0.8
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
                    messages: historialmensajes,
                    temperature: 0.8
                }
            ),
            usage: {
                prompt_tokens: 10,
                completion_tokens: 7,
                total_tokens: 15,
            }
        }

return fetch(URL_API, peticion1, peticion2).then(resp => resp.json())
.then(data => {
    mensajeElemento.textContent = data.choices[0].message.content
})
.catch((error) => {
    mensajeElemento.textContent = 'Ups! Algo malo ocurrió. Por favor intenta de nuevo.'
});

}


