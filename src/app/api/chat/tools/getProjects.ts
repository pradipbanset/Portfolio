import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description: 'This tool shows Pradip Basnet projects.',
  parameters: z.object({}).nullable().transform(val => val ?? {}),
  execute: async () => {
    return {
      projects: [
        {
          name: 'Gamma-Hadron Classification',
          description: 'High-energy gamma particle classification comparing SVM, Logistic Regression, and Naive Bayes with performance benchmarking.',
          tags: ['Python', 'scikit-learn', 'Jupyter', 'SVM'],
          url: 'https://github.com/pradipbanset/Gamm-Hadron-classification',
        },
        {
          name: 'Hospital Management System',
          description: 'Full software solution to manage and streamline administrative and clinical processes within a hospital.',
          tags: ['Python', 'OOP', 'Database'],
          url: 'https://github.com/pradipbanset/Hospital-Management-System',
        },
        {
          name: 'Data Visualization Suite',
          description: 'Interactive visualizations and dashboards to communicate complex datasets clearly.',
          tags: ['HTML', 'JavaScript', 'CSS'],
          url: 'https://github.com/pradipbanset/Data-Visualization',
        },
        {
          name: 'Eye Spy E-Commerce',
          description: 'Complete e-commerce platform with product listings, cart management, and checkout flow.',
          tags: ['JavaScript', 'React', 'CSS'],
          url: 'https://github.com/pradipbanset/eye-spy-e-commerce-',
        },
        {
          name: 'Data Analysis & Clustering',
          description: 'Unsupervised learning and exploratory analysis using K-Means clustering on real-world datasets.',
          tags: ['Python', 'K-Means', 'Pandas', 'Matplotlib'],
          url: 'https://github.com/pradipbanset/data-analysis-clustering',
        },
        {
          name: 'AI Portfolio',
          description: 'This portfolio! AI-powered chat interface built with Next.js, TypeScript, and Gemini.',
          tags: ['Next.js', 'TypeScript', 'Gemini', 'Framer Motion'],
          url: 'https://github.com/pradipbanset',
        },
      ],
      message: 'Here are my projects! Check them out on GitHub 🚀',
    };
  },
});