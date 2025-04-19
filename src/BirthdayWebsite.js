import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { motion } from "framer-motion";
import * as THREE from "three";
import "tailwindcss/tailwind.css";
import React, { useEffect, useRef, useState } from "react";

const cardData = [
  {
    title: "📸 Memory Gallery",
    id: "gallery",
    description: "A walk through our beautiful memories.",
  },
  {
    title: "🎥 Video Message",
    id: "video",
    description: "Watch this special message just for you!",
  },
  {
    title: "⏳ Timeline of Us",
    id: "timeline",
    description: "Moments that made us, us.",
  },
  {
    title: "🕹️ Cosmic Game",
    id: "game",
    description: "Play a little game among the stars!",
  },
  {
    title: "💬 Love Letter",
    id: "letter",
    description: "Words from my heart to yours.",
  },
  {
    title: "🎁 Surprise",
    id: "surprise",
    description: "A sweet surprise awaits you 💝",
  },
];

export default function BirthdayWebsite({stopMusic}) {
  const mountRef = useRef(null);
  const navigate = useNavigate();

  const scrollToCards = () => {
    document
      .getElementById("cards-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedCard, setSelectedCard] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [error, setError] = useState(false);

  
const cardData = [
    {
      title: "📸 Memory Gallery",
      id: "gallery",
      description: "A walk through our beautiful memories.",
      question: "Where did we take our first photo together?",
      options: ["At London", "At Office", "In a park", "At the Bar"],
      correctAnswer: "At the Bar",
    },
    {
      title: "🎥 Video Message",
      id: "video",
      description: "Watch this special message just for you!",
      question: "What do you think will be this Video?",
      options: ["Sexual😜", "Romantic", "Birthday Wishes🎂", "Comedy"],
      correctAnswer: "Romantic",
    },
    {
      title: "⏳ Timeline of You",
      id: "timeline",
      description: "Moments that made You, you.",
      question: "When did we first meet?",
      options: ["17th July 2023", "18th July 2023", "16th July 2023", "15th July 2023"],
      correctAnswer: "17th July 2023",
    },
    {
      title: "🕹️ Cosmic Game",
      id: "game",
      description: "Play a little game among the stars!",
      question: "Which game did we play the most?",
      options: ["Mario Kart", "Minecraft", "Among Us", "COD"],
      correctAnswer: "Among Us",
    },
    {
      title: "💬 A Sweet Letter",
      id: "letter",
      description: "Words from my heart to yours.",
      question: "How do you think our love story will end?",
      options: ["You Propose", "Me Propose", "Everything Stays the same", "We never know"],
      correctAnswer: "You Propose",
    },
    {
      title: "🎁 Surprise",
      id: "surprise",
      description: "A sweet surprise awaits you 💝, might be naughty! 😉",
      question: "What's the one thing that You love in bed?",
      options: ["Hardcore Sex💦", "Sweet Cuddles", "Ass Fucking", "Blowjob🌬️"],
      correctAnswer: "Blowjob🌬️",
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowQuiz(true);
    setError(false);
  };

  const handleAnswer = (option) => {
    if (option === selectedCard.correctAnswer) {
        stopMusic();
      navigate(`/${selectedCard.id}`);
    } else {
      setError(true);
    }
  };

  useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-x-hidden text-white font-sans">
      <div ref={mountRef} className="fixed inset-0 -z-10"></div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-5xl md:text-7xl font-bold tracking-wide drop-shadow-xl"
        >
          🌌 Happy Birthday Stuts !!! 🌟
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 0.4 }}
          transition={{ duration: 4 }}
          className="text-7xl md:text-10xl font-bold tracking-wide drop-shadow-xl"
        >
          Scroll to start this Adventure !!!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, 0, 20] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer mt-10"
          onClick={scrollToCards}
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-3xl md:text-4xl animate-bounce"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
      <section
        id="cards-section"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-blue-950 px-4 py-20 overflow-hidden"
      >
        {/* Stars BG animation */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-blue-500/10 to-black opacity-40 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full z-10">
          {cardData.map((card) => (
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCardClick(card)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-64 shadow-xl transition-all duration-300 cursor-pointer hover:shadow-blue-400/60 hover:bg-white/20"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {card.title}
              </h3>
              <p className="text-white/80">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quiz Modal */}
      {showQuiz && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-gray-900 to-blue-800 border border-blue-400 p-6 rounded-2xl max-w-md w-full text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              🧠 {selectedCard.question}
            </h3>
            <div className="grid grid-cols-1 gap-3 mb-4">
              {selectedCard.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg"
                >
                  {option}
                </button>
              ))}
            </div>
            {error && (
              <p className="text-red-400">
                Oops! That's not right. Try again 💡
              </p>
            )}
            <button
              onClick={() => setShowQuiz(false)}
              className="mt-4 text-sm text-blue-300 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
