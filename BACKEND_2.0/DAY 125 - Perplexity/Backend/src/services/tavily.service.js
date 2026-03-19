import { tavily } from '@tavily/core'

const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY })

export async function tavilySearch(query) {
    try {
        const response = await tvly.search(query)

        if (!response.results || response.results.length === 0) {
            return "No relevent information found."
        }

        const topResult = response.results.slice(0, 3)

        const formattedResults = []

        for (let i = 0; i < topResult.length; i++) {
            const result = topResult[i]

            const content = result.content.slice(0, 300)

            formattedResults.push(
                `${i + 1}. ${result.title || "No title"}\n${content}\nSource: ${result.url}\n`
            )
        }

        return `Here is the latest information:\n\n${formattedResults.join("\n")}`;
    } catch (error) {
        console.error("Tavily Error:", error);
        return "Error fetching search results.";
    }
}