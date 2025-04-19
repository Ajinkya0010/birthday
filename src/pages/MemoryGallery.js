import React, { useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import { Howl } from "howler";

const images = Array.from({ length: 57 }, (_, i) => {
  const num = i + 1;
  return {
    src: `/assets/images/memory${num}.jpg`,
    alt: `Memory ${num}`,
  };
});

export default function MemoryGallery() {
  const soundRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 this makes the page jump to the top on mount

    soundRef.current = new Howl({
      src: ["/assets/songs/music_gallery.mp3"], // change to your actual path
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
    <div className="relative min-h-screen bg-gradient-to-b from-black to-blue-900 flex flex-col items-center justify-center p-10 text-white overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
      >
        ⬅ Back
      </button>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white bg-opacity-10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-8 z-10 text-pink-300 drop-shadow-lg">
        📸 Memory Gallery
      </h1>

      <div className="w-full max-w-5xl z-10">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          mode="lg-fade"
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images.map((img, index) => (
            <a
              key={index}
              href={img.src}
              className="transform hover:scale-105 transition duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-60 object-cover rounded-xl"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}
