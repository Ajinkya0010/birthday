// SealAnimation.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SealAnimation = ({ onOpen, startMusic, stopMusic }) => {
  const [opened, setOpened] = useState(false);
 

  const handleClick = () => {
    startMusic();
    setOpened(true);
    setTimeout(onOpen, 1000); // Delay to allow animation to complete
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {!opened && (
        <motion.div
          className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          onClick={handleClick}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white text-4xl">💌</span>
        </motion.div>
      )}
    </div>
  );
};

export default SealAnimation;
