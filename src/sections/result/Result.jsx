import { useLocation } from "react-router";
import { EmojisImages } from "../../elements/Data";
import { motion } from "framer-motion";
import { WhiteMark } from "../../assets/images";
import TopBar from "../../elements/TopBar";
import { fadeIn, staggerContainer, textVariant } from "../../motions/Motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Result() {
  const location = useLocation();
  const { response } = location.state || {};
  const { color } = location.state || {};

  return (
    <motion.section variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: true, amount: 0.25 }} style={{ background: color }} className=" text-white min-h-screen">
      <TopBar />
      <div className="container max-w-md Poppins mx-auto flex flex-col items-center justify-center min-h-[90vh]">
        <div className="emoji text-4xl">
          <motion.img variants={fadeIn('down', 'tween', 0.2, 0.6)} src={EmojisImages.find((item) => item.emoji === response.emoji)?.img ? EmojisImages.find((item) => item.emoji === response.emoji)?.img : WhiteMark} className="h-28 w-auto" alt="hello" />
        </div>

        {
          response ?
            (<div className="mt-4 text-center">
              <TypeAnimation
                sequence={[response.mainsentence, 300]}
                style={{ fontSize: '24px', fontWeight: 600, color: 'white' }}
                repeat={false}
              />
              <motion.ul variants={textVariant(0.6)} className="max-w-md mt-2 text-base space-y-1 list-none list-inside text-white">
                {
                  response.adviceslist.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                }
              </motion.ul>
            </div>)
            : (
              <h2 className="mb-2 text-lg font-semibold text-white">No data available</h2>
            )
        }
      </div>
    </motion.section>
  )
}
