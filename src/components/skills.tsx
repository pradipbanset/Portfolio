'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Cpu, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Machine Learning & AI',
      icon: <Brain className="h-5 w-5" />,
      skills: [
        'Python',
        'scikit-learn',
        'PyTorch',
        'Deep Learning',
        'Neural Networks',
        'LLMs',
        'NLP',
        'AI Agents',
        'Prompt Engineering',
        'Hugging Face Transformers',
        'RAG',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'Data Science',
      icon: <Database className="h-5 w-5" />,
      skills: [
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'R Programming',
        'Jupyter Notebooks',
        'Data Analysis',
        'Data Visualization',
        'Statistical Modeling',
        'K-Means Clustering',
        'SVM',
        'Logistic Regression',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'Web & Tools',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Git',
        'GitHub',
        'VS Code',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Currently Exploring',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Vector Databases',
        'LangChain',
        'Fine-tuning LLMs',
        'MLOps',
        'Docker',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Analytical Thinking',
        'Problem Solving',
        'Fast Learner',
        'Collaboration',
        'Detail-Oriented',
        'Communication',
        'Creativity',
      ],
      color: 'bg-rose-50 text-rose-600 border border-rose-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div key={index} className="space-y-3 px-0" variants={itemVariants}>
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                    >
                      <Badge className={`${section.color} border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;