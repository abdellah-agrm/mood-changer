import { motion } from "framer-motion";
import { SmileEmoji } from "../../assets/images";
import TextInput from "./TextInput";
import { fadeIn, staggerContainer, textVariant } from "../../motions/Motion";

export default function Auth() {
  return (
    <motion.section variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: true, amount: 0.25 }} className="bg-gray-900 text-white min-h-screen">
      <div className="container max-w-md mx-auto relative Poppinsmx-auto flex flex-col items-center justify-center min-h-[90vh]">
        <div className="emoji text-4xl">
          <motion.img variants={fadeIn('down', 'tween', 0.1, 0.6)} src={SmileEmoji} className="h-28 w-auto" alt="hello" />
        </div>
        <motion.h1 variants={textVariant(0.6)} className="text-2xl font-semibold mt-4">Tap to introduce yourself</motion.h1>
        <motion.p variants={textVariant(0.8)} className="text-center text- text-gray-300 px-6 mt-4">
          Brighten your day with a motivational quote, or reminder that you’re amazing.
        </motion.p>

        <TextInput />
      </div>
    </motion.section>
  )
}