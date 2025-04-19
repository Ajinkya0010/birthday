import React from 'react';
import { motion } from 'framer-motion';

const Heart = ({ left, delay, size, opacity }) => (
  <motion.div
    initial={{
      y: '100vh',
      opacity: 0,
      x: `${Math.random() * 100 - 50}%`, // Start from a random horizontal position
    }}
    animate={{
      y: ['100vh', '-100vh'], // Hearts will float from bottom to top
      opacity: [0, opacity, 0], // Fade in and out
      x: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`], // Random x movement
    }}
    transition={{
      duration: 18 + Math.random() * 12, // Randomize floating duration
      repeat: Infinity,
      ease: 'easeInOut',
      delay, // Stagger delay for gradual effect
    }}
    className="absolute text-pink-400 select-none"
    style={{
      left: `${left}%`,
      fontSize: `${size}px`,
    }}
  >
    ❤️
  </motion.div>
);

const FloatingHearts = () => {
  const totalHearts = 30;
  const immediateHearts = Math.floor(totalHearts * 0.5); // 50% of hearts start immediately

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {Array.from({ length: totalHearts }).map((_, i) => (
        <Heart
          key={i}
          left={Math.random() * 100}
          delay={i < immediateHearts ? 0 : Math.random() * 4}  // Random delay for staggered hearts
          size={18 + Math.random() * 12}
          opacity={0.6 + Math.random() * 0.4}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;