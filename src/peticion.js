export const componentePeticion = () => {

const URL_API = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';

function generate() {
  fetch(URL_API, {
  method: "POST",
  headers: {'Content-Type': "application/json",
  Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    prompt: "Hola, scorpion",
  }),
})
.then(response => console.log(response.json()))
.catch(error => console.log(error))
}
generate()

}


