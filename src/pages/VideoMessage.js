import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const VideoPage = () => {
  const mountRef = useRef(null);

  // Background stars animation
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
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

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Starfield */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 0.6 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-7xl font-bold tracking-wide drop-shadow-xl"
        >
          🎥 Watch this special Video !!
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 0.4 }}
          transition={{ duration: 1.5 }}
          className="text-3xl md:text-5xl font-bold tracking-wide drop-shadow-xl"
        >
          Grab your popcorn 🍿 or your Bf's Dick ✏️ and enjoy!!
        </motion.h2>
        <video
          src="/assets/videos/VideoMessage.mp4"
          controls
          autoPlay
          className="rounded-xl shadow-xl w-full max-w-xl"
        />
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ff007f" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-pink-600 text-white rounded-xl font-semibold text-xl transition-all"
        >
          <a href="/">Return to Home</a>
        </motion.button>
      </div>
    </div>
  );
};

export default VideoPage;
