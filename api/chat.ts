
import { GoogleGenAI } from "@google/genai";

// This file is a serverless function. It will be executed in a secure backend environment.
// IMPORTANT: You must set the GEMINI_API_KEY environment variable in your hosting provider's settings (e.g., Vercel, Netlify).
const apiKey = process.env.GEMINI_API_KEY;

// This tells hosting providers like Vercel to run this function on their global edge network for the best performance.
export const config = {
  runtime: 'edge',
};

// The main function that handles incoming requests.
export default async function handler(req: Request) {
    // Handle CORS preflight requests.
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    // Only allow POST requests for the chat functionality.
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    // Check if the API key is configured on the server.
    if (!apiKey) {
        return new Response('API key not configured on the server.', { status: 500 });
    }

    try {
        // Parse the chat history and system instructions from the request body.
        const { history, systemInstruction } = await req.json();

        if (!history || !systemInstruction) {
            return new Response('Missing history or systemInstruction in request body', { status: 400 });
        }
        
        const ai = new GoogleGenAI({ apiKey });

        // Call the Gemini API with a streaming request.
        const stream = await ai.models.generateContentStream({
            model: 'gemini-2.5-flash-preview-04-17',
            contents: history,
            config: {
                systemInstruction: systemInstruction,
            }
        });

        // Create a new readable stream to pipe the Gemini response back to the client.
        const readableStream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                for await (const chunk of stream) {
                    const text = chunk.text;
                    if (text) {
                        controller.enqueue(encoder.encode(text));
                    }
                }
                controller.close();
            },
        });

        // Return the streaming response to the client.
        return new Response(readableStream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'X-Content-Type-Options': 'nosniff',
                'Access-Control-Allow-Origin': '*',
            },
        });

    } catch (error) {
        console.error("Error in chat handler:", error);
        return new Response('An error occurred while processing your request.', { status: 500 });
    }
}
