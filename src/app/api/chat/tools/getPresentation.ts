import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Pradip Basnet. Used to answer "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}).nullable().transform(val => val ?? {}),
  execute: async () => {
    return {
      presentation:
        "I'm Pradip Basnet, a Data Science student at Sunway College, Kathmandu. I specialize in Machine Learning, Python, and Data Analysis. I'm passionate about building intelligent systems that learn from data — from classical ML algorithms to deep learning pipelines. Based in Nepal 🇳🇵, always learning, always building.",
    };
  },
});