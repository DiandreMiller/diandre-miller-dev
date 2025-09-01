import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-gray-200 px-6 pb-24 pt-28">
      {/* container */}
      <section className="mx-auto max-w-5xl">
        {/* card */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl">
          {/* top: avatar + heading */}
          <div className="p-8 sm:p-10 md:p-12">
            <div className="grid gap-8 md:grid-cols-[220px,1fr] md:items-center">
              {/* avatar */}
              <div className="flex md:block justify-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-neutral-700">
                  <img
                    src="/diandre-dev-sharper.png"
                    alt="Diandre Miller"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* heading + intro */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  Hey, I’m <span className="text-green-400">Diandre Miller</span>
                </h1>
                <p className="mt-3 text-lg text-gray-300">
                  Software developer from Brooklyn who loves turning ideas into
                  real, useful things. I pivoted from community leadership into
                  tech, taught myself video editing, and then committed to an
                  intensive year of learning software development — gaining the
                  skills and experience to build projects from the ground up.
                </p>
              </div>
            </div>

            {/* body copy */}
            <div className="mt-8 space-y-5 text-gray-300 leading-relaxed">
              <p>
                Earlier in my career I worked at{" "}
                <span className="text-blue-400 font-medium">
                  East Flatbush Village, Inc.
                </span>{" "}
                as Administrative Director and Assistant Program Director. I loved
                the impact and community focus. A health setback pushed me to
                learn new skills — starting with video editing — and that momentum
                led me into software development.
              </p>
              <p>
                Today I build with modern JavaScript, React, and Tailwind. I enjoy
                shipping crisp, accessible interfaces and solving real problems
                through code. If something feels missing in the world, I want to
                build it.
              </p>
            </div>

            {/* chips / stack */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Node.js", "Vite"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-green-500 px-5 py-2.5 text-sm font-semibold text-green-400 hover:bg-green-500/10 transition"
              >
                Contact Me
              </Link>
              <a
                href="https://github.com/DiandreMiller"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-gray-300 hover:bg-neutral-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;