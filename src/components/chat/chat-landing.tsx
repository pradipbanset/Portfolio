'use client';
import { motion } from 'framer-motion';
import { Award, Code, Mail, MessageSquare, Smile } from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  const suggestedQuestions = [
    { icon: <Smile className="h-4 w-4" />, text: 'Who are you?' },
    { icon: <Code className="h-4 w-4" />, text: 'What projects have you worked on?' },
    { icon: <Award className="h-4 w-4" />, text: 'What are your skills?' },
    { icon: <MessageSquare className="h-4 w-4" />, text: "What's the craziest thing you've done?" },
    { icon: <Mail className="h-4 w-4" />, text: 'How can I contact you?' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Profile card */}
      <motion.div
        variants={itemVariants}
        className="mb-6 w-full max-w-md rounded-2xl border border-neutral-200 bg-white/60 p-6 shadow-sm backdrop-blur-lg"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white shadow-md">
            PB
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-900">Pradip Basnet</h2>
            <p className="text-sm text-neutral-500">Kathmandu, Nepal 🇳🇵</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Hey 👋 I'm Pradip — a Data Science student passionate about Machine Learning and AI.
          I love building smart systems, exploring data, and hiking in the Himalayas 🏔️.
          Ask me anything!
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {['AI/ML', 'Python', 'Data Science', 'Kathmandu', 'Next.js'].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Suggested questions */}
      <motion.p
        variants={itemVariants}
        className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400"
      >
        Quick questions
      </motion.p>

      <motion.div
        variants={containerVariants}
        className="flex w-full max-w-md flex-col gap-2"
      >
        {suggestedQuestions.map((q, i) => (
          <motion.button
            key={i}
            variants={itemVariants}
            onClick={() => submitQuery(q.text)}
            className="flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white/50 px-4 py-3 text-left text-sm font-medium text-neutral-700 backdrop-blur-sm transition-all hover:border-neutral-300 hover:bg-white/80 hover:shadow-sm active:scale-[0.98]"
          >
            <span className="text-neutral-400">{q.icon}</span>
            {q.text}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ChatLanding;