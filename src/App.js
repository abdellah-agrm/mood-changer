import { Route, Routes } from "react-router";
import Auth from "./sections/auth/Auth";
import Moods from "./sections/mood/Moods";
import Result from "./sections/result/Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/moods" element={<Moods />} />
      <Route path="/Result" element={<Result />} />
    </Routes>
  );
}