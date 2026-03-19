import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description: 'This tool shows fun/crazy facts and hobbies about Pradip Basnet.',
  parameters: z.object({}).nullable().transform(val => val ?? {}),
  execute: async () => {
    return {
      hobbies: [
        '🏔️ Hiking in the Himalayas — living in Nepal has its perks!',
        '📊 Building ML models for fun on weekends',
        '🍛 Obsessed with dal bhat — could eat it every day (and do)',
        '🎮 Gaming when I need a break from debugging',
        '📚 Reading about new AI research papers',
      ],
      crazyFact: "I once trained a model at 2am just because I couldn't sleep and had an idea. It actually worked 😅",
      funFact: "I'm from Kathmandu — the city with the world's highest mountains AND the world's best momos 🥟",
      message: "That's a bit about the non-code side of me! Life's not all Python you know 😄",
    };
  },
});