import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description: 'This tool shows Pradip Basnet experience and education information.',
  parameters: z.object({}).nullable().transform(val => val ?? {}),
  execute: async () => {
    return {
      education: [
        {
          institution: 'Sunway College',
          location: 'Kathmandu, Nepal',
          degree: 'Bachelor of Data Science',
          status: 'Currently studying',
          highlights: ['Machine Learning', 'Data Analysis', 'Statistics', 'Python & R'],
        },
      ],
      experience: [
        {
          type: 'Academic Projects',
          highlights: [
            'Built multiple ML classification models (SVM, Naive Bayes, Logistic Regression)',
            'Developed data visualization dashboards',
            'Created a full hospital management system in Python',
            'Worked on unsupervised learning with K-Means clustering',
          ],
        },
      ],
      lookingFor: 'Internship or entry-level role in ML/AI or Data Science',
      message: "That's my journey so far! Still early days but building fast 🚀",
    };
  },
});