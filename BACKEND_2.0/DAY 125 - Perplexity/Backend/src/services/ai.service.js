import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai"
import { HumanMessage, SystemMessage, AIMessage, tool, createAgent } from "langchain";
import * as z from 'zod'
import { tavilySearch } from "./tavily.service.js";
import { sendEmail } from "./mail.service.js";

const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY
})

const mistralModel = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY
})

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
                    - user asks for latest, current, today, recent info
                    - information may have changed after 2024`,
        schema: z.string().describe("The search query")
    }
);

const agent1 = createAgent({
    model: geminiModel,
    tools: [emailTool, searchTool]
});

const agent2 = createAgent({
    model: mistralModel,
    tools: [emailTool, searchTool]
});

export async function generateResponse(messages) {
    console.log("RAW:", messages);

    const formattedMessages = messages
        .map(msg => {
            if (msg.role === 'user') {
                return new HumanMessage(msg.content)
            }
            else if (msg.role === 'ai') {
                return new AIMessage(msg.content)
            }
            return null
        })
        .filter(Boolean)

    console.log("FORMATTED:", formattedMessages);

    if (formattedMessages.length === 0) {
        throw new Error("No valid messages for AI")
    }

    console.log("Before AI call");

    const response = await geminiModel.invoke(formattedMessages);

    console.log("After AI call");

    return response.text
}

export async function generateChatTitle(message) {
    const response = await mistralModel.invoke([
        new SystemMessage(`
            You are a helpful assistant that generates concise and descriptive titles for chat conversations.
            
            User will provide you with the first message of a chat conversation, and you will generate a title that captures the essence of the conversation in 2-4 words. The title should be clear, relevant, and engaging, giving users a quick understanding of the chat's topic.    
        `),
        new HumanMessage(`
            Generate a title for a chat conversation based on the following first message:
            "${message}"
        `)
    ])

    return response.text
}