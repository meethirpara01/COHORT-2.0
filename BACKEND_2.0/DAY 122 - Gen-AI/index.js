import "dotenv/config"
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { HumanMessage } from "langchain";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const model = new ChatMistralAI({
//     model: "mistral-small-latest",
// })

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY
});

const messages = []

while (true) {
    const userInput = await rl.question("\x1b[32mYou:\x1b[0m ")

    messages.push(new HumanMessage(userInput))

    const response = await model.invoke(messages)

    messages.push(response)

    console.log(`\x1b[34m[AI]\x1b[0m ${response.content}`)
}


