import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { Success } from '../../elements/Toasts';
import toast, { Toaster } from 'react-hot-toast';
import { textVariant } from '../../motions/Motion';

export default function TextInput() {
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    localStorage.setItem("fullname", name);
    localStorage.setItem('authAction', 'true');
    setOpen(false);
    toast(<Success text={`Welcome ${name}`} />, {
      style: { background: 'none', boxShadow: 'none' },
      duration: 2000,
      position: 'top-center',
    });
    setTimeout(() => {
      navigate("/moods");
    }, 1500);
  }

  return (
    <>
      <Toaster />
      <motion.button variants={textVariant(1)} onClick={() => setOpen(true)} className="bg-white text-black text-base font-semibold py-3 px-6 rounded-lg mt-8 absolute bottom-6 max-md:w-[80%]">
        Get Started
      </motion.button>

      <Sheet snapPoints={[0.5]} isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <form onSubmit={handleAuth} className="px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900">Full name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" placeholder="John Doe" required />
              <button type="submit" className="text-white bg-gray-900 hover:bg-gray-950 font-medium rounded-lg text-sm mt-3 sm:w-auto px-8 py-2.5 text-center">Submit</button>
            </form>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}