import { componentePeticion } from "../src/peticion.js";

const RespuestaOpenIA = jest.fn();
global.fetch = jest.fn(() => Promise.resolve({ json: RespuestaOpenIA }));


describe("Endpoint de openIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    RespuestaOpenIA.mockResolvedValueOnce({ choices: [{ message: "foo" }] });

    const userMessage = "Hola";

    componentePeticion("null", userMessage).then(res => { res.json().then( resFormatted => console.log(resFormatted) )}); 

    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer null`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: `Finge que eres undefined` },
            { role: "user", content: userMessage },
          ],
          temperature: 0.8,
        }),
        usage: {
          prompt_tokens: 7,
          completion_tokens: 5,
          total_tokens: 12,},
      },
    );

    
  });

  it('El edpoint responde de manera correcta', () => {

    const response = {
      "choices": [
        {
          "message": {
            "role": "assistant",
            "content": "¡Hola!"
          }
        }]
    };

    RespuestaOpenIA.mockResolvedValue(response);

    //componentePeticion((res) => console.log(res) )
            return componentePeticion('null',[{ role: 'user', content: 'Hola'}])
              .then((resolve) => {
                return resolve.json()
                .then((resolveFormatted) => {
                  console.log(resolveFormatted)
                  expect(resolveFormatted).toBe(response);
                })
            });
      });
});
