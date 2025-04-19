import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "./FloatingHearts";
import SealAnimation from "./SealAnimation";
import "@fontsource/dancing-script";
import { Howl } from "howler";

const LoveLetter = () => {
  const [opened, setOpened] = useState(false);
  const soundRef = useRef(null);
  const navigate = useNavigate();

  const handleBack = () => {
    stopMusic();
    navigate("/");
  };

  const startMusic = () => {
    soundRef.current = new Howl({
      src: ["/assets/songs/music_love_letter.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.1,
    });
    soundRef.current.play();
  };

  const stopMusic = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white font-sans overflow-hidden">
      <FloatingHearts />

      {/* Back Button */}
      {opened && (
        <button
          onClick={handleBack}
          className="absolute top-5 left-5 z-50 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 shadow-md transition-all duration-300"
        >
          ← Back
        </button>
      )}

      {!opened && (
        <SealAnimation
          startMusic={startMusic}
          stopMusic={stopMusic}
          onOpen={() => setOpened(true)}
        />
      )}

      {opened && (
        <div className="flex items-center justify-center min-h-screen px-6 py-20">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              rotate: -5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.6, // Slower transition for a smooth effect
              ease: "easeOut", // Ease out for more fluid movement
            }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-10 max-w-2xl shadow-2xl border border-white/20"
          >
            <h1 className="text-4xl text-white font-dancing-script text-center mb-8">
              To The Love of My Life 💖
            </h1>
            <p className="font-dancing-script text-2xl text-white leading-relaxed tracking-wide whitespace-pre-line text-center">
              {`Happiest 24th Birthday Dumdum, my qtpieee, my moonpie  .......
                I made this for you, kyuki you are the best in the universe.
                Every moment with you feels jaise I would spend eternity in your arms.Your smile, your laugh, your warmth - the feeling is best.

                Tujhe pata h stu, Kabhi kabhi lagta hai, teri jitni taarif karun utna kam h. Each and every second jo humne spend kia feels so good. I miss it. You wearing that pretty Saree and looking so good that day and phir mere stupidity ke saath rehna, love u so much. 

                You being born is for like Universe to go "WOOWWWW!!!"

                Kabhi kabhi seriously sochta hoon… tu real hai ya koi mein abhi bhi koi sapne mein hun? Matlab itni sweet, itni khubsurat, itni understanding, itni caring … kaise possible hai? Shayad Bhagwan ne bhi tujhe ek unique piece banaya h my qtpiee 😄

                Tere saath baat karna, tujhe dekhna, tere aas-paas rehna — sab itna natural lagta hai jaise yahi sahi hai. Teri har ek baat ek magic hai, bro... dil literally melt ho jaata hai. Aur tu jab serious ho jaati hai na, tab bhalehi thodi phatti h but there is always a soft side to you!. Matlab tu har mode pe perfect hai. Cute bhi, smart bhi, thodi pagli bhi — sab kuch ek combo pack mein mil gaya.

                Sach bolun toh, kabhi kabhi lagta hai — kaash main tujhe pehle milta. Matlab like childhood mein hi… jab tu 10-12 saal ki thi. Bas uss age se hi teri life mein hota, tere saath woh simple wale moments share karta, school ke periods, tiffin sharing, aur tuition mein gossips. Tab se hi tujhe samajhta, tujhe feel karta, aur tujhse thoda aur close ho jaata.

                Aaj tu meri life mein hai, bas itna hi bohot hai. Par andar se lagta hai — main tujhe zyada deserve karta, aur tu mujhe. Iss journey ko aur pehle start karna chahiye tha. Bas tu mil gayi, ab baaki sab side mein. Tera hona hi kaafi hai.

                Aur haan, tu seriously awesome hai — jaise full level-up version of what people call “dream girl.” I am super luckkkkyyy stutssss ❤️

                Honestly babes, bohot miss kar rha hun tujhe, yeh letter, yeh webapp wagerah still feels as a void to me. I want to hug you so bad and thank the universe for us to have met. I want to cuddle with you forever, go to places, build a dream together and so much.  

                Humare pyare dates, humari pyari gifts ek dusre, mera cheezein bhulna and tera mujhe daanta each and everything has been so special. I miss u babesss and I love youu......

                And finally, I know spoilt your birthday but if you have invited your friends, have a blastt ........... 

                Happiest Birthday Stuts,
                From Jojo
                🌌`}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
