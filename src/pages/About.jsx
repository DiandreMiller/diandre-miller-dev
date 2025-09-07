import { Link } from "react-router-dom";
import MyHobbies from '../components/MyHobbies';
import MyProjects from "../components/MyProjects";

const About = () => {
  return (
    <>
       {/* About me metadata */}
       <title>About Me | Diandre Miller</title>
       {/* cononical link about page */}
       <link
        rel="canonical"
        href="https://diandremillerdev.netlify.app/about-me"
       />
      <meta
        name="description"
        content="Learn about Diandre Miller, a full stack software engineer with expertise in React, Node.js, and PostgreSQL."
      />
      <meta property="og:title" content="About Me | Diandre Miller" />
      <meta
        property="og:description"
        content="Discover the background, skills, and journey of Diandre Miller, a full stack software engineer."
      />
      <meta
        property="og:url"
        content="https://diandremillerdev.netlify.app/about-me"
      />
      <meta
        property="og:image"
        content="https://diandremillerdev.netlify.app/diandre-dev.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About Me | Diandre Miller"
      />
      <meta
        name="twitter:description"
        content="Learn more about the experience and skills of Diandre Miller."
      />
      <meta
        name="twitter:image"
        content="https://diandremillerdev.netlify.app/diandre-dev.png"
      />
      {/* ✅ Person schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://diandremillerdev.netlify.app/#person",
          name: "Diandre Miller",
          jobTitle: "Full Stack Software Engineer",
          url: "https://diandremillerdev.netlify.app/",
          sameAs: [
            "https://github.com/DiandreMiller",
            "https://www.linkedin.com/in/diandre-miller/"
          ]
        })}
      </script>
      {/* Page */}
      <main className="min-h-screen bg-neutral-950 text-gray-200 px-6 pb-24 pt-28">
        <section className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl">
            <div className="p-8 sm:p-10 md:p-12">
              <div className="grid gap-8 md:grid-cols-[220px,1fr] md:items-center">
                <div className="flex md:block justify-center">
                  <div className="group relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-neutral-700">
                    <img
                      src="/diandre-dev.png"
                      alt="Diandre Miller"
                      className="h-full w-full object-cover"
                    />
                    <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm italic text-orange-400 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300">
                      Character is who you are when no one is watching.
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    Hey, I’m <span className="text-green-400">Diandre Miller</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Software developer from Brooklyn who loves turning ideas into
                    real, useful things. I pivoted from community leadership into
                    tech, taught myself video editing, and then committed to an
                    intensive year of learning software development — gaining the
                    skills and experience to build projects from the ground up.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Earlier in my career I worked at{" "}
                    <a
                      href="https://eastflatbushvillage.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <span className="cursor-pointer text-blue-400 font-medium">
                      East Flatbush Village, Inc.
                    </span>{" "}
                  </a>
                
                  as Administrative Director and Assistant Program Director. I loved
                  the impact and community focus. A health setback pushed me to
                  learn new skills — starting with video editing — and that momentum
                  led me into software development.
                </p>
                <p>
                Today I build with modern JavaScript, React, Tailwind, Node.js, and 
                Express, while also working with Python for backend and scripting tasks. 
                I enjoy shipping crisp, accessible interfaces and solving real problems 
                through code. If something feels missing in the world, I want to build it.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {["React", "Vite", "Node.js", "PostgreSQL", "Sequelize", "Express", "Supabase", "Javascript", "TypeScript", "Python", "Tailwind CSS", "Vanilla CSS"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact-me"
                  className="inline-flex items-center justify-center rounded-full border border-green-500 px-5 py-2.5 text-sm font-semibold text-green-400 hover:bg-green-500/10 transition"
                >
                  Contact Me
                </Link>
                <a
                  href="https://github.com/DiandreMiller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:bg-yellow-300 transition"
                >
                  GitHub
                </a>
                <a
                  href="/FSW-Diandre-September-2025-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:bg-red-400 transition"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <MyHobbies />
          <MyProjects />
        </section>
      </main>
    </>
  );
};

export default About;