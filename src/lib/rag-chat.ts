import { RAGChat, upstash } from "@upstash/rag-chat"; 
import { redis } from "./redis";

// Initialize your Upstash model
const upstashModel = upstash("meta-llama/Meta-Llama-3-8B-Instruct");

// // Create an instance of OpenAI model using your API key
// const openAIModel = openai("gpt-4-turbo", {
//   apiKey: process.env.OPENAI_API_KEY, 
// });


// Create an instance of RAGChat with both models
export const ragChat = new RAGChat({
  model: upstashModel,
  redis: redis,
});
