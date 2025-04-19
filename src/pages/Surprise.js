import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

const surprises = [
  {
    label: "👀 Reveal the forbidden nipple",
    src: "/images/nipple.jpg",
  },
  {
    label: "🍆 Unleash the eggplant",
    src: "/images/eggplant.png",
  },
  {
    label: "💋 Kiss me if you dare",
    src: "/images/kiss.jpg",
  },
  {
    label: "🎭 See my true face",
    src: "/images/face_reveal.jpg",
  },
  {
    label: "💎 Unlock the ultimate surprise",
    src: "/images/diamond.jpg",
  },
];

export default function Surprise() {
  const [revealed, setRevealed] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const handleReveal = (index) => {
    if (revealed.length >= 2 || revealed.includes(index)) return;

    setRevealed([...revealed, index]);
    setModalImage(surprises[index].src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        You May Only Choose Two... Choose Wisely 😏
      </motion.h1>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        {surprises.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => handleReveal(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={revealed.length >= 2 && !revealed.includes(index)}
            className={`bg-white text-black px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
              revealed.includes(index)
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-pink-200"
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-[90%] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={modalImage} alt="Surprise!" className="w-full h-auto object-cover" />
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
