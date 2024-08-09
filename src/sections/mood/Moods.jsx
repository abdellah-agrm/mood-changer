import { useEffect, useState } from "react";
import moment from "moment";
import { motion } from "framer-motion";
import { EmojisMood } from "../../elements/Data";
import RequestButton from "./RequestButton";
import { Toaster } from "react-hot-toast";
import Confetti from "../../elements/Confetti";
import TopBar from "../../elements/TopBar";
import { fadeIn, staggerContainer, textVariant } from "../../motions/Motion";

export default function Moods() {
  const [activeMood, setActiveMood] = useState("Happy");
  const [activeColor, setActiveColor] = useState("#eab308");

  useEffect(() => {
    setActiveColor(EmojisMood.find((item) => item.mood === activeMood)?.color);
  }, [activeMood]);

  // Format the date using moment
  const currentDate = new Date();
  const formattedDate = moment(currentDate).format('dddd, D MMMM');

  const handleClick = (mood) => { setActiveMood(mood) };

  return (
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: true, amount: 0.25 }} style={{ backgroundColor: activeColor }} className="text-white min-h-screen">
      <Confetti/>
      <Toaster/>
      <TopBar/>
      <div className="container max-w-md relative Poppins mx-auto flex flex-col items-center justify-center min-h-[90vh]">
        <div className="emoji text-4xl">
          <motion.img variants={fadeIn('down', 'tween', 0.1, 0.6)} src={EmojisMood.find((item) => item.mood === activeMood)?.img} className="h-28 w-auto" alt="hello" />
        </div>
        <motion.h1 variants={textVariant(0.6)} className="text-5xl text-center text-white font-bold mt-4 mb-2">WHAT'S<br />YOUR MOOD<br />LIKE TODAY</motion.h1>
        <motion.p variants={textVariant(0.8)} className="text-white font-semibold mb-6">{formattedDate}</motion.p>

        <div className="absolute bottom-4">
          {EmojisMood.map((item, index) => (
            <>
              <motion.button variants={fadeIn('right', 'tween', index * 0.3, 0.5)} key={index} onClick={() => handleClick(item.mood)}
                className={`py-2 px-5 rounded-lg font-semibold bg-white/15 hover:bg-white/30
                ${index < 2 ? "mr-1" : index > 2 && index < 5 ? "mr-1 mt-1" : index === 5 ? "px-[24px]" : null}`}
                style={{ background: item.mood === activeMood ? "white" : null, color: item.mood === activeMood ? activeColor : null }}>
                {item.mood}
              </motion.button>
              {index === 2 ? <br /> : null}
            </>
          ))}
          <RequestButton colorProp={activeColor} moodProp={activeMood} />
        </div>
      </div>
    </motion.section>
  )
}
