import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Howl } from "howler";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


import BirthdayWebsite from "./BirthdayWebsite";
import MemoryGalleryPage from "./pages/MemoryGallery";
import VideoMessagePage from "./pages/VideoMessage";
import TimelinePage from "./pages/Timeline";
import GamePage from "./pages/Game";
import LoveLetterPage from "./pages/LoveLetter";
import SurprisePage from "./pages/Surprise";
import CosmicIntro from "./CosmicIntro";

function App() {
  const [introDone, setIntroDone] = useState(false);
  const soundRef = useRef(null);

  const handleStart = () => {
    soundRef.current = new Howl({
      src: ["/assets/songs/music.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.3,
    });
    soundRef.current.play();
    setIntroDone(true);
  };

  const stopMusic = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {!introDone ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-black min-h-screen"
          >
            <CosmicIntro onStart={handleStart} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-black min-h-screen"
          >
            <Routes>
              <Route path="/" element={<BirthdayWebsite stopMusic={stopMusic} />} />
              <Route path="/gallery" element={<MemoryGalleryPage />} />
              <Route path="/video" element={<VideoMessagePage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/letter" element={<LoveLetterPage />} />
              <Route path="/surprise" element={<SurprisePage />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;