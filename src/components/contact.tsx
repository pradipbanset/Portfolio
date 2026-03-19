'use client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';

export function Contact() {
  const contactInfo = {
    name: 'Pradip Basnet',
    email: 'basnetpradip324@gmail.com',
    handle: '@pradipbanset',
    socials: [
      { name: 'GitHub', url: 'https://github.com/pradipbanset' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pradip-basnet-a5411131a' },
      { name: 'Instagram', url: 'https://www.instagram.com/pradeep_basnnet' },
    ],
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">

        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            Contact
          </h2>
          <span className="mt-2 text-sm text-muted-foreground sm:mt-0">
            {contactInfo.handle}
          </span>
        </div>

        {/* Location */}
        <p className="text-muted-foreground mb-6 text-sm">
          📍 Kathmandu, Nepal open to remote opportunities worldwide 🌏
        </p>

        {/* Email */}
        <div
          className="group mb-6 cursor-pointer"
          onClick={() => openLink(`mailto:${contactInfo.email}`)}
        >
          <div className="flex items-center gap-1">
            <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
              {contactInfo.email}
            </span>
            <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8">
          {contactInfo.socials.map((social) => (
            <motion.button
              key={social.name}
              className="group flex cursor-pointer items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => openLink(social.url)}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.97 }}
            >
              {social.name}
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-white/50 px-6 py-5 backdrop-blur-sm">
          <p className="text-foreground text-base font-medium">
            Want to collaborate on an ML project or just talk AI? 🤖
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            I'm always open to interesting projects, internships, and conversations. Reach out!
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;