import { createGroq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getIntership';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';

export const maxDuration = 30;

const GROQ_KEYS = [
  process.env.GROQ_API_KEY_1,
  process.env.GROQ_API_KEY_2,
].filter(Boolean) as string[];

function errorHandler(error: unknown) {
  if (error == null) return 'Unknown error';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return JSON.stringify(error);
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function POST(req: Request) {
  const { messages } = await req.json();

  const recentMessages = messages.slice(-2);
  recentMessages.unshift(SYSTEM_PROMPT);

  console.log('[CHAT-API] Incoming messages:', recentMessages);

  const tools = {
    getProjects,
    getPresentation,
    getResume,
    getContact,
    getSkills,
    getCrazy,
    getInternship,
  };

  for (let keyIdx = 0; keyIdx < GROQ_KEYS.length; keyIdx++) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        console.log(`[CHAT-API] Key ${keyIdx + 1}, attempt ${attempt + 1}`);

        const groq = createGroq({ apiKey: GROQ_KEYS[keyIdx] });

        const result = streamText({
          model: groq('llama-3.3-70b-versatile'),
          messages: recentMessages,
          toolCallStreaming: true,
          tools,
          maxSteps: 2,
          onFinish: (r) => {
            console.log('[CHAT-API] Response text:', r.text?.slice(0, 150));
            console.log('[CHAT-API] Tool calls:', r.toolCalls?.length ?? 0);
            console.log('[CHAT-API] Finish reason:', r.finishReason);
          },
        });

        return result.toDataStreamResponse({
          getErrorMessage: errorHandler,
        });

      } catch (err) {
        const msg = errorHandler(err);
        console.error(`[CHAT-API] Error on key ${keyIdx + 1} attempt ${attempt + 1}:`, msg);

        if (msg.includes('tokens per minute') || msg.includes('TPM')) {
          console.log('[CHAT-API] TPM limit hit, waiting 3s...');
          await sleep(3000);
          continue;
        }

        if (msg.includes('tokens per day') || msg.includes('TPD')) {
          console.log(`[CHAT-API] Daily limit on key ${keyIdx + 1}, switching key...`);
          break;
        }

        return new Response(msg, { status: 500 });
      }
    }
  }

  return new Response('All API keys exhausted. Please try again later.', { status: 429 });
}