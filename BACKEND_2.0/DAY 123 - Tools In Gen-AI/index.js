import "dotenv/config"
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { sendEmail } from "./mail.service.js";
import { HumanMessage, tool, createAgent } from "langchain";
import * as z from "zod";
import { tavilySearch } from "./tavily.service.js";

const emailTool = tool(
    sendEmail, 
    {
        name: "emailTool",
        description: "Use this tool to send an email.",
        schema: z.object({
            to: z.string().describe("The recipient's email address"),
            subject: z.string().describe("The subject of the email"),
            html: z.string().describe("The HTML content of the email")
        })
    }
);

const searchTool = tool(
    tavilySearch,
    {
        name: "searchTool",
        description: `Use this tool ONLY when the user asks for:
                    - latest news
                    - real-time data
                    - current events
                    - information after 2024`,
        schema: z.string().describe("The search query")
    }
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const model = new ChatMistralAI({
    model: "mistral-small-latest",
})

// const model = new ChatGoogleGenerativeAI({
//   model: "gemini-2.5-flash-lite",
//   apiKey: process.env.GEMINI_API_KEY
// });

const agent = createAgent({
    model,
    tools: [emailTool, searchTool]
});

const messages = []

while (true) {
    const userInput = await rl.question("\x1b[32mYou:\x1b[0m ")

    messages.push(new HumanMessage(userInput))

    const response = await agent.invoke({messages})

    messages.push(response.messages[response.messages.length - 1])
    console.log(response);
    

    console.log(`\x1b[34m[AI]\x1b[0m ${response.messages[response.messages.length - 1].content}`)
}

