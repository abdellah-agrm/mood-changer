import { GoogleGenerativeAI } from "@google/generative-ai";
import { useNavigate } from "react-router";
import { textVariant } from "../../motions/Motion";
import {motion} from "framer-motion";

export default function RequestButton({ colorProp, moodProp }) {
  const fullname = localStorage.getItem("fullname");
  let navigate = useNavigate();
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_APIKEY);

  const handleRequest = async () => {
    let model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `{
      prompt: "Hello, my name is ${fullname} and I feel ${moodProp}. I want some advice to get out of this mood. The answer should be in JSON format and relatable. Include one emoji from the following array as the 'name emoji':",
      emojis: [
        "rose emoji",
        "smiling face with halo emoji",
        "smiling face with heart eyes emoji",
        "smiling face with hearts emoji",
        "smiling face with smiling eyes emoji",
        "sparkles emoji",
        "star emoji",
        "sunflower emoji",
        "sun with face emoji",
        "tulip emoji",
        "cactus emoji",
        "cherry blossom emoji",
        "full moon face emoji",
        "grinning face with smiling eyes emoji",
        "heart with ribbon emoji",
        "hugging face emoji",
        "party popper emoji",
        "red heart emoji",
        "relieved face emoji"
      ].
      response format should be like this format, dont forget to make the adviceslist an array: 
      {
        "emoji": "selected emoji from the list",
        "mainsentence": "small main sentence",
        "adviceslist": 
        [
        "advice 1 without emojis",
        "advice 2 without emojis",
        "advice 3 without emojis",
        etc ...
        ]
      }
    }`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const responseData = JSON.parse(text);
    
    navigate("/result", { state: { response: responseData, color: colorProp } });
  }

  return (
    <div className="mt-2 text-center">
      <hr className="border-white/30" />
      <motion.button variants={textVariant(1.2)} className="mt-2 py-2 px-5 rounded-lg font-semibold bg-white" style={{ color: colorProp }}
        onClick={handleRequest} >
        Continue
      </motion.button>
    </div>
  )
}