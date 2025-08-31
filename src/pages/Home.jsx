import DiandreLogo from '../assets/diandre-dev.png';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative group">
        <img
          className="w-100 transition duration-300 group-hover:brightness-50"
          src={DiandreLogo}
          alt="Diandre Miller"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-green-500 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 translate-y-40">
          Enter
        </h1>
      </div>
    </div>
  )
}

export default Home;