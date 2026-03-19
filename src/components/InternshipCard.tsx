'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, GraduationCap } from 'lucide-react';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:basnetpradip324@gmail.com', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
            <span className="text-xl font-bold text-white">PB</span>
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Pradip Basnet
            </h2>
            <p className="text-muted-foreground text-sm">
              Open to Internships & Collaborations
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available
          </span>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <GraduationCap className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Education</p>
            <p className="text-muted-foreground text-sm">
              Data Science — Sunway College, Kathmandu 🇳🇵
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Kathmandu, Nepal — open to remote worldwide 🌏
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-orange-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Availability</p>
            <p className="text-muted-foreground text-sm">
              Available now for internships, part-time, or freelance projects
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech Stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="list-disc pl-4">
                <li>Python, scikit-learn, TensorFlow, PyTorch</li>
                <li>QLoRA, PEFT, Hugging Face Transformers</li>
                <li>LangChain, LangGraph, RAG pipelines</li>
                <li>Groq, Gemini, Claude AI APIs</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Vector DBs (Chroma, Pinecone)</li>
                <li>FastAPI, Docker, Next.js</li>
                <li>Pandas, NumPy, Matplotlib, R</li>
                <li>
                  <a
                    href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer text-blue-500 underline"
                  >
                    See all skills
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <p className="text-foreground text-sm leading-relaxed">
          Hands-on experience with LLM fine-tuning, RAG pipelines, AI agents with LangGraph, and computer
          vision. I build real
          things that work from legal AI tools to knowledge graphs.
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
        <p className="text-foreground text-sm leading-relaxed">
          Join a team building meaningful AI products. I want to grow fast,
          contribute hard, and work on problems that actually matter. I'm
          hungry, detail-oriented, and always learning 🚀
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;