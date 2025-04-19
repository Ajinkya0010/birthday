import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CosmicIntro({ onStart }) {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-black via-blue-900 to-purple-950 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl text-white font-bold mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Let's start this Birthday Adventure with me !!!
      </motion.h1>

      <motion.button
        onClick={onStart}
        className="flex items-center gap-3 text-white text-lg px-6 py-3 bg-white/10 border border-white rounded-full hover:bg-white/20 transition-all backdrop-blur-md"
        whileHover={{ scale: 1.05 }}
      >
        Shoot!!
        <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
}