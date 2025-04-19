import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { Howl } from "howler";


const timelineData = [
  {
    date: '20th April 2001',
    title: 'A Legend is Born - Birth of a Goddess',
    img: '/assets/images/img1.png',
    desc: 'The Goddess Stuti Patel arrives on this Planet. Earth is Blessed!!!',
  },
  {
    date: '15th July 2005',
    title: 'Primary School',
    img: '/assets/images/img2.png',
    desc: 'Stuti Patel is into Primary School! Acing Every Challenge!!',
  },
  {
    date: '30th July 2017',
    title: 'Saudi - A new Journey',
    img: '/assets/images/img3.jpg',
    desc: 'Goddess flies to Saudi. Even tho not sure about things, She goes on and overcome these challenges to eventually lighten a fire in her to settle in Abroad',
  },
  {
    date: '25th July 2019',
    title: 'Goddess Back to the Land of God',
    img: '/assets/images/img4.jpg',
    desc: 'Goddess flies backs to India and Joins Nirma University. She faces a newness in her thought with the foreign land perspectives. She goes on and overcome the challenges and makes unforgettable memories and friends.',
  },
  {
    date: '18th July 2023',
    title: 'Goddess joins Deutsche Bank -  a company much Below her Caliber',
    img: '/assets/images/img5.jpg',
    desc: 'She earns a hard earned PPO and then creates ever lasting connections and an impression one can never forget',
  },
  {
    date: '7th October 2024',
    title: 'Goddess travels to Germany to bless the World',
    img: '/assets/images/img6.jpg',
    desc: 'Goddess flies to Germany to begin her journey to settle abroad. She gets into the renowned TU Dresden, and aces in every test showcasing her caliber. Even tough faced with hardships and difficulties from her bf, she is able to overcome everything and ace in every field.',
  },
];


const Timeline = () => {
  const soundRef =useRef(null);

  useEffect(() => {
      window.scrollTo(0, 0); // 👈 this makes the page jump to the top on mount
  
      soundRef.current = new Howl({
        src: ["/assets/songs/music_timeline.mp3"], // change to your actual path
        autoplay: true,
        loop: true,
        volume: 0.5,
        html5: true, // allow autoplay on mobile too
      });
  
      soundRef.current.play();
  
      return () => {
        soundRef.current?.stop();
      };
    }, []);

    const handleBack = () => {
      soundRef.current?.stop();
      window.history.back();
    };

  return (
    <div className="relative px-6 py-16 bg-gradient-to-b from-black to-blue-900 min-h-screen text-white">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
      >
        ⬅ Back
      </button>

      <h1 className="text-4xl font-bold text-center mb-16 glow">The Journey of Goddess Stuti</h1>
      
      <div className="relative max-w-4xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-purple-400 before:-translate-x-1/2">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="md:w-1/2 p-4">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80 transition transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <div className="bg-purple-800 bg-opacity-30 p-6 rounded-xl border border-purple-400 shadow-xl hover:shadow-2xl transition-all">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm opacity-80 mb-4">{item.date}</p>
                <p className="text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
