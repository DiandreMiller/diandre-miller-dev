import dCreatorVerse from "../assets/DCreatorVerse.png";
import interactiveResume from "../assets/interactiveResume.png";
import redCanarySecureLoginChallenge from "../assets/redCanarySecureLoginChallenge.jpeg";
import smrtCart from "../assets/smrtCart.png";
import threeMYoutube from "../assets/threeMYoutube.png";
import wealthWise from "../assets/wealthWise.png";

const MyProjects = () => {
  const projects = [
    {
      name: "D-CreatorVerse",
      img: dCreatorVerse,
      link: "https://dcreatorverse.netlify.app/",
      desc: "A creative digital platform where you can explore your favorite creators.",
    },
    {
      name: "Interactive Resume",
      img: interactiveResume,
      link: "https://diandremillerinteractiveresume.netlify.app/",
      desc: "If you love basketball, resumes, and games, you'll love this app.",
    },
    {
      name: "Red Canary Secure Login Challenge",
      img: redCanarySecureLoginChallenge,
      link: "https://rc-secure-login-front-end.netlify.app/",
      desc: "A secure login system built for a technical challenge.",
    },
    {
      name: "SmrtCart",
      img: smrtCart,
      link: "https://smrtcart.netlify.app/",
      desc: "A shopping app designed for smarter price comparisons saving you $$$$",
    },
    {
      name: "3M YouTube Clone",
      img: threeMYoutube,
      link: "https://three-m-youtube.netlify.app/",
      desc: "A YouTube-inspired platform built from scratch.",
    },
    {
      name: "WealthWise",
      img: wealthWise,
      link: "https://wealthwisefinancialplanner.netlify.app/",
      desc: "A financial planning app to manage income and expenses.",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        My <span className="text-green-400">Projects</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-green-500 transition shadow-md hover:shadow-[0_0_15px_#22c55e50]"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-500 p-4">
              <h3 className="text-lg font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;