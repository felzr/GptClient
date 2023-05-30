const OpenAIChatbot = require("./libs/openai");

const apiKey = 'batata'; // Substitua pela sua própria chave de API do OpenAI
const chatbot = new OpenAIChatbot(apiKey);

// Exemplo de uso do chatbot
const prompt = "Tudo bem?";
chatbot.ask(prompt)
    .then(answer => {
        console.log(answer);
    })
    .catch(error => {
        console.error(error);
    });