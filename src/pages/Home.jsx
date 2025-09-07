import DiandreLogo from '../assets/diandre-dev.png';
import { useNavigate } from 'react-router-dom';

// Background
import MatrixBackground from '../components/MatrixBackground';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Homepage SEO metadata */}
      <title>Diandre Miller | Full Stack Software Engineer</title>
      <link rel="canonical" href="https://diandremillerdev.netlify.app/" />
      <meta
        name="description"
        content="Portfolio of Diandre Miller, a full stack software engineer specializing in React, Node.js, and PostgreSQL. Explore projects and get in touch."
      />
      {/* Open Graph */}
      <meta property="og:title" content="Diandre Miller | Full Stack Software Engineer" />
      <meta
        property="og:description"
        content="Explore the portfolio of Diandre Miller, showcasing projects in React, Node.js, and PostgreSQL."
      />
      <meta property="og:image" content="https://diandremillerdev.netlify.app/diandre-dev.png" />
      <meta property="og:url" content="https://diandremillerdev.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Diandre Miller portfolio cover" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Diandre Miller | Full Stack Software Engineer" />
      <meta
        name="twitter:description"
        content="Portfolio of Diandre Miller, full stack software engineer. View projects and contact me."
      />
      <meta name="twitter:image" content="https://diandremillerdev.netlify.app/diandre-dev.png" />
      {/* ✅ JSON-LD for HomePage + Person reference */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://diandremillerdev.netlify.app/#webpage",
          "url": "https://diandremillerdev.netlify.app/",
          "name": "Diandre Miller | Full Stack Software Engineer",
          "description":
            "Portfolio of Diandre Miller, a full stack software engineer specializing in React, Node.js, and PostgreSQL. Explore projects and get in touch.",
          "author": {
            "@id": "https://diandremillerdev.netlify.app/#person"
          },
          "publisher": {
            "@id": "https://diandremillerdev.netlify.app/#person"
          }
        })}
      </script>
      {/* Home Page */}
      <div className="flex items-center justify-center h-screen relative">
        <MatrixBackground />

        <div className="relative group flex flex-col items-center">
          <img
            className="w-100 transition duration-300 group-hover:brightness-50"
            src={DiandreLogo}
            alt="Diandre Miller"
          />

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
      </>
  );
};

export default Home;