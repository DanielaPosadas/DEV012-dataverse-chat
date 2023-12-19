export const componentePeticion = (props, userMessage) => {
  const URL_API = "https://api.openai.com/v1/chat/completions";
  const API_KEY = localStorage.getItem("apikey");

  return fetch(URL_API, {
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
  });
};
