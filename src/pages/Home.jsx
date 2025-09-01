import DiandreLogo from '../assets/diandre-dev.png';
import { useNavigate } from 'react-router-dom';

// Background
import MatrixBackground from '../components/MatrixBackground';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen relative">
      <MatrixBackground />

      {/* Logo wrapper */}
      <div className="relative group flex flex-col items-center">
        <img
          className="w-100 transition duration-300 group-hover:brightness-50"
          src={DiandreLogo}
          alt="Diandre Miller"
        />

        {/* Enter pill positioned on top of the logo */}
        <span
          onClick={() => navigate('/about-me')}
          className="
            absolute left-1/2 -translate-x-1/2 
            translate-y-[700%] sm:translate-y-[70%] lg:translate-y-[840%]
            cursor-pointer px-5 py-2 border-2 border-red-500 
            lg:font-extrabold text-red-700 text-[3.5vw] sm:text-[2vw] lg:text-[1vw] 
            font-semibold rounded-full animate-heartbeat willchange-beat
            hover:shadow-[0_0_10px_#ef4444,0_0_20px_#ef4444] transition
          "
        >
          Enter
        </span>
      </div>
    </div>
  );
};

export default Home;