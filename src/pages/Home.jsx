import DiandreLogo from '../assets/diandre-dev.png';
import { useNavigate } from 'react-router-dom';

//Background
import MatrixBackground from '../components/MatrixBackground';

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
        <MatrixBackground />
      <div className="relative group" onClick={() => navigate('/about')}>
        <img
          className="w-100 transition duration-300 group-hover:brightness-50"
          src={DiandreLogo}
          alt="Diandre Miller"
        />

      <h1 className="absolute inset-0 flex items-center justify-center">
        <span className="px-5 py-2 border-2 border-red-500 lg:font-extrabold text-red-700 text-[22px] font-semibold rounded-full animate-heartbeat willchange-beat translate-y-42">
          Enter
        </span>
      </h1>
      </div>
    </div>
  )
}

export default Home;