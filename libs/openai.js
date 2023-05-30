const { Configuration, OpenAIApi } = require("openai");

class OpenAIChatbot {
    constructor(apiKey) {
        this.configuration = new Configuration({
            apiKey: apiKey,
        });
        this.openai = new OpenAIApi(this.configuration);
        this.model = "text-davinci-003";
    }

    async ask(prompt) {
        const completion = await this.openai.createCompletion({
            model: this.model,
            prompt: prompt,
        });
        return completion.data.choices[0].text.trim();
    }
}

module.exports = OpenAIChatbot;