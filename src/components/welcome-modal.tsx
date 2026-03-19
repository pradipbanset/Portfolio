'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-white/30 p-3 shadow-lg backdrop-blur-lg hover:bg-white/60 focus-visible:ring-0"
      onClick={() => setIsOpen(true)}
    >
      <span className="text-lg font-bold text-neutral-700">PB</span>
      <span className="sr-only">About Pradip</span>
    </Button>
  );

  const handleContactMe = () => {
    setIsOpen(false);
    window.location.href = '/chat?query=How%20can%20I%20contact%20you%3F';
  };

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="text-4xl font-bold tracking-tight">
                  Hey, I'm Pradip 👋
                </DialogTitle>
                <DialogDescription className="mt-2 text-base text-neutral-500">
                  AI/ML Practitioner · Data Science Student · Kathmandu, Nepal 🇳🇵
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">

                {/* About */}
                <div className="space-y-3">
                  <h3 className="text-primary text-xl font-semibold">
                    🧠 Who am I?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    I'm a <strong>Data Science student at Sunway College, Kathmandu</strong>, specializing
                    in Machine Learning, Python, and Data Analysis. I love building intelligent systems
                    that learn from data — from classical ML algorithms to deep learning pipelines.
                    When I'm not coding, I'm hiking in the Himalayas 🏔️ or eating dal bhat 🍛.
                  </p>
                </div>

                {/* Portfolio */}
                <div className="space-y-3">
                  <h3 className="text-primary text-xl font-semibold">
                    🤖 What is this portfolio?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    This is my <strong>AI-powered interactive portfolio</strong>. Instead of a boring
                    static page, my AI avatar answers your questions about me, my projects, my skills,
                    and anything else you're curious about. Whether you're a recruiter, a fellow dev,
                    or just curious — just ask!
                  </p>
                </div>

                {/* Skills preview */}
                <div className="space-y-3">
                  <h3 className="text-primary text-xl font-semibold">
                    ⚡ Quick skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Python', 'Machine Learning', 'scikit-learn', 'TensorFlow',
                      'Pandas', 'NumPy', 'R', 'Data Analysis', 'Next.js', 'Git',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/60 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-6 py-3"
                size="sm"
              >
                Start Chatting 🚀
              </Button>
              <div
                className="mt-6 flex cursor-pointer flex-wrap gap-1 text-center text-sm"
                onClick={handleContactMe}
              >
                <p className="text-muted-foreground">
                  Want to collaborate or hire me?
                </p>
                <div className="flex cursor-pointer items-center text-blue-500 hover:underline">
                  Contact me.
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}