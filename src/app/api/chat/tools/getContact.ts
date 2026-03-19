import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'This tool shows Pradip Basnet contact information.',
  parameters: z.object({}).nullable().transform(val => val ?? {}),
  execute: async () => {
    return {
      contacts: [
        { platform: 'GitHub', url: 'https://github.com/pradipbanset', handle: 'pradipbanset' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/pradip-basnet-a5411131a', handle: 'pradip-basnet' },
        { platform: 'Location', url: null, handle: 'Kathmandu, Nepal 🇳🇵' },
        { platform: 'Education', url: null, handle: 'Sunway College — Data Science' },
      ],
      message: "Here's how to reach me! Feel free to connect, I'm always happy to chat about ML, data, or cool projects 😊",
    };
  },
});