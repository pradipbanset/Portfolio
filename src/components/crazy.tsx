'use client';
import React from 'react';
import { motion } from 'framer-motion';

const hobbies = [
  {
  emoji: '⚽',
  title: 'Futsal',
  desc: 'Playing futsal with friends is my go-to way to recharge. Fast-paced, competitive, and way more fun than debugging 😄',
},
  {
    emoji: '🤖',
    title: 'Building AI Projects',
    desc: 'I build ML models and AI tools for fun on weekends. Fine-tuning LLMs, building RAG pipelines  this is my version of gaming.',
  },
  {
    emoji: '🍛',
    title: 'Dal Bhat Enthusiast',
    desc: 'Dal bhat twice a day keeps the bugs away. I could eat it every single day and honestly, I do.',
  },
  {
    emoji: '📚',
    title: 'Reading AI Research Papers',
    desc: 'I follow the latest ML papers on arXiv. Transformers, diffusion models, LLM fine-tuning always something new to learn.',
  },
  {
    emoji: '🎮',
    title: 'Gaming',
    desc: 'When I need a break from debugging at 2am, gaming helps reset the brain before diving back in.',
  },
  {
    emoji: '🌏',
    title: 'Exploring Nepal',
    desc: 'From Kathmandu\'s busy streets to quiet mountain villages Nepal has endless places to explore and I\'m always finding new ones.',
  },
];

const Crazy = () => {
  return (
    <div className="mx-auto w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">

        <div className="mb-8">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            Life Beyond Code 🌄
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            What Pradip does when he's not training models or writing Python
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl bg-white/60 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 text-3xl">{hobby.emoji}</div>
              <h3 className="text-foreground mb-1 font-semibold text-sm">
                {hobby.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {hobby.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fun fact */}
        <div className="mt-8 rounded-2xl bg-white/40 px-6 py-4">
          <p className="text-foreground text-sm font-medium">
            🏔️ Fun fact
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            I once trained a model at 2am just because I couldn't sleep and had an idea. It actually worked 😅. That's the Kathmandu grind.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Crazy;