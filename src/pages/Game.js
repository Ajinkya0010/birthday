import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const questionsData = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the nearest star to Earth?",
    options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
    answer: "Proxima Centauri",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Saturn", "Mercury"],
    answer: "Mars",
  },
  {
    question: "What is the name of our galaxy?",
    options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
    answer: "Milky Way",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
];

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);

  useEffect(() => {
    if (timeRemaining === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      if (timeRemaining > 0) setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questionsData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeRemaining(30);
    } else {
      setShowResult(true);
    }
  };

  const guessAnswer = (answer) => {
    switch (answer) {
      case "Jupiter":
        return "Jupiter is the largest planet in our solar system, with a massive size and strong gravity.";
      case "Proxima Centauri":
        return "Proxima Centauri is the closest known star to Earth, located 4.24 light years away.";
      case "Mars":
        return "Mars has a distinct red appearance due to iron oxide, giving it its nickname 'The Red Planet'.";
      case "Milky Way":
        return "Our galaxy, the Milky Way, contains billions of stars, and the Solar System is located in one of its arms.";
      case "Saturn":
        return "Saturn is famous for its stunning rings and is the second-largest planet in the solar system.";
      default:
        return "No guess available.";
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-sans bg-gradient-to-r from-indigo-900 via-indigo-800 to-black text-white relative overflow-hidden"
      style={{ backgroundSize: "cover" }}
    >
      {/* Cosmic Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

      {/* Result Screen */}
      {showResult ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-10 p-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl shadow-lg text-center"
        >
          <h2 className="text-5xl font-bold text-white">Your Final Score</h2>
          <p className="text-3xl mt-4 text-yellow-300">{score} / {questionsData.length}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all"
          >
            Play Again
          </button>
        </motion.div>
      ) : (
        <>
          {/* Game Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 mb-8"
          >
            Cosmic Quiz Game
          </motion.div>

          {/* Timer */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-2xl p-4 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-lg shadow-lg mb-8"
          >
            Time Remaining: {timeRemaining}s
          </motion.div>

          {/* Current Question */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="max-w-md w-full text-center p-8 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-3xl shadow-xl transform hover:scale-105 transition-all"
          >
            <h2 className="text-3xl mb-6">{questionsData[currentQuestionIndex].question}</h2>
            <div className="space-y-4">
              {questionsData[currentQuestionIndex].options.map((option, index) => (
                <motion.button
                  key={index}
                  className="w-full p-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => handleAnswer(option)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {/* Hint or Guess Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 text-sm text-gray-300 italic"
            >
              {guessAnswer(questionsData[currentQuestionIndex].answer)}
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Game;
