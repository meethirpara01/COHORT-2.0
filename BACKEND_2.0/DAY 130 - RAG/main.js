import 'dotenv/config'
import fs from 'fs'
import { PDFParse } from 'pdf-parse'
import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from '@pinecone-database/pinecone'

const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
})
const index = pc.index('rag-intro')

const embeddings = new MistralAIEmbeddings({
    model: "mistral-embe",
    apiKey: process.env.MISTRAL_API_KEY
})

const databuffer = fs.readFileSync('./story.pdf')

// const pdfParse = new PDFParse({
//     data: databuffer
// })
// const data = await pdfParse.getText()

const loader = await CSVLoader('./story.pdf')
const data = await loader.load()



const splliter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0
})
const chunks = await splliter.splitText(data.text)
console.log(chunks, chunks.length);

const docs = await Promise.all(chunks.map( async (chunk) => {
    const embedding = await embeddings.embedQuery(chunk)
    return {
        text : chunk,
        embedding
    }
}))




