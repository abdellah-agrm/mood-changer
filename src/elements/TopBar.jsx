import { useNavigate } from "react-router";
import { BackArrow } from "../assets/images";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="max-md:max-w-md w-full mx-auto px-2 pt-3">
        <button onClick={() => navigate(-1)}>
          <img src={BackArrow} className="h-6 w-6" alt="back" />
        </button>
      </div>
    </div>
  )
}
