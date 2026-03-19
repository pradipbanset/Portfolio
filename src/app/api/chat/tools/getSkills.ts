import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description: 'This tool shows a list of Pradip Basnet skills.',
  parameters: z.object({}).nullable().transform(val => val ?? {}),
  execute: async () => {
    return {
      hardSkills: [
        { category: 'ML & AI', skills: ['Python', 'scikit-learn', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'NLP'] },
        { category: 'Data Science', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'R Programming', 'Jupyter'] },
        { category: 'Web & Tools', skills: ['JavaScript', 'React', 'Next.js', 'HTML/CSS', 'Git', 'GitHub'] },
      ],
      softSkills: [
        'Analytical Thinking',
        'Problem Solving',
        'Fast Learner',
        'Collaboration',
        'Detail-Oriented',
        'Communication',
      ],
      message: 'You can see all my skills above 👆',
    };
  },
});