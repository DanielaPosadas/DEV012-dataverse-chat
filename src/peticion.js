import dataset from "./data/dataset";

promptInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      generate();
    }
  });
  generateBtn.addEventListener("click", generate);
const url = 'https://api.openai.com/chat/completions';

// Datos de la solicitud (cambia esto según tus necesidades)
console.log("holaaaaaa");
export const datosSolicitud = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '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', 
  },
  body: JSON.stringify({
    prompt: "¡Hola, soy" + dataset.name + "!",
    max_tokens: 50,
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: promptInput.value }],
  
  }),
};

// Realizar la solicitud Fetch
fetch(url, datosSolicitud){
  .then(response => response.json())
  .then(data => console.log(dataset.name))
  .catch(error => console.log('error'));
}