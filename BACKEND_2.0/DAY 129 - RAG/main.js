import 'dotenv/config'
import fs from 'fs';
import { PDFParse } from 'pdf-parse'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import { MistralAIEmbeddings } from '@langchain/mistralai'
import { Pinecone } from '@pinecone-database/pinecone'

// const dataBuffer = fs.readFileSync('./story.pdf');

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('rag-intro')

// const pdfParse = new PDFParse({
//     data: dataBuffer
// })
// const data = await pdfParse.getText()

const embeddings = new MistralAIEmbeddings({
    apiKey: process.env.MISTRAL_API_KEY,
    model: 'mistral-embed'
})

// const spliter = new RecursiveCharacterTextSplitter({    
//     chunkSize:500,
//     chunkOverlap: 0
// })

// const chunks = await spliter.splitText(data.text);
// console.log(chunks, chunks.length);

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

// console.log(result);


const queryembedding = await embeddings.embedQuery("How was the internship exprerience?")
console.log(queryembedding);

const result = await index.query({
    vector: queryembedding,
    topK: 2,
    includeMetadata: true
}) 

console.log(JSON.stringify(result));

