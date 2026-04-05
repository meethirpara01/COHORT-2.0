import 'dotenv/config'
import fs from 'fs'
import { PDFParse } from 'pdf-parse'
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from '@pinecone-database/pinecone'

const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
})
const index = pc.index('rag-intro')

const embeddings = new MistralAIEmbeddings({
    apiKey: process.env.MISTRAL_API_KEY,
    model: "mistral-embed"
})

// USING PDFParse
const databuffer = fs.readFileSync('./story.pdf')

const pdfParse = new PDFParse({
    data: databuffer
})
const data = await pdfParse.getText()

const splliter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0
})
const chunks = await splliter.splitText(data.text)
// console.log(chunks, chunks.length);


// USING PDFLoader
// const pdfFile = "./story.pdf"
// const loader = new PDFLoader(pdfFile)
// const pages = await loader.load()
// console.log(pages);

// const splliter = new RecursiveCharacterTextSplitter({
//     chunkSize: 500,
//     chunkOverlap: 0
// })
// const chunks = await splliter.splitDocuments(pages)
// console.log(chunks, chunks.length);



// FROM HERE PROCESS WILL GOING SAME FOR BOTH PDFParse AND PDFLoader
// const docs = await Promise.all(chunks.map(async (chunk) => {
//     const embedding = await embeddings.embedQuery(chunk)
//     return {
//         text: chunk,
//         embedding
//     }
// }))

// const result = await index.upsert({
//     records: docs.map((doc, i) => ({
//         id: `doc-${i}`,
//         values: doc.embedding,
//         metadata: {
//             text: doc.text
//         }
//     }))
// })


const queryEmbedding = await embeddings.embedQuery("How was the internship exprerience?")
console.log(queryEmbedding);

const result = await index.query({
    vector: queryEmbedding,
    topK: 2,
    includeMetadata: true
})

console.log(JSON.stringify(result));









