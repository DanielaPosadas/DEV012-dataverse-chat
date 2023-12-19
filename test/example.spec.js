import { componentePeticion } from "../src/peticion.js";

const RespuestaOpenIA = jest.fn();
global.fetch = jest.fn(() => Promise.resolve({ json: RespuestaOpenIA }));
describe("Endpoint de openIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    RespuestaOpenIA.mockResolvedValueOnce({ choices: [{ message: "foo" }] });

    const messages = [{ role: "user", content: "foo" }];


    componentePeticion("12456", messages, mensajeChatBoot)

    

    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer 12456`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages,
        }),
      },
    );
  });
});
