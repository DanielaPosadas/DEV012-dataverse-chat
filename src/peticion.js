export const componentePeticion = (props, userMessage, mensajeChatboot) => {
  const URL_API = "https://api.openai.com/v1/chat/completions";
  const API_KEY = localStorage.getItem("apikey");
  const mensajeElemento = mensajeChatboot.querySelector(".pMensajeBoot");

  const peticion2 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },

    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `Finge que eres ${props.name}` },
        { role: "user", content: userMessage },
      ],
      temperature: 0.8,
    }),
    usage: {
      prompt_tokens: 7,
      completion_tokens: 5,
      total_tokens: 12,
    },
  };
  return fetch(URL_API, peticion2)
    .then((resp) => resp.json())
    .then((data) => {
      mensajeElemento.textContent = data.choices[0].message.content;
    })
    .catch((error) => {
      mensajeElemento.textContent =
        "Ups! Algo anda mal con la Api Key. Por favor intenta de nuevo ";
      console.log(error);
    });
};
