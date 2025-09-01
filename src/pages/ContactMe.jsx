import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactMe = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-gray-200 flex items-center justify-center px-6 pt-28 pb-16">
      <section className="max-w-4xl w-full flex flex-col items-center text-center space-y-12">
        {/* Heading */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Let’s Connect
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Interested in hiring me, collaborating on a project, or just want to
            chat about software development? Reach out through one of the
            options below.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {/* Email */}
          <a
            href="mailto:millerdiandre@gmail.com?subject=Portfolio%20Inquiry"
            className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-red-500 transition"
          >
            <Mail
              size={40}
              className="text-gray-400 group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_#ef4444] transition"
            />
            <span className="mt-3 text-sm text-gray-300 group-hover:text-red-400">
              Email
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+19737804709"
            className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-green-500 transition"
          >
            <Phone
              size={40}
              className="text-gray-400 group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_#22c55e] transition"
            />
            <span className="mt-3 text-sm text-gray-300 group-hover:text-green-400">
              Call
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/DiandreMiller"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-white transition"
          >
            <Github
              size={40}
              className="text-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#ffffff] transition"
            />
            <span className="mt-3 text-sm text-gray-300 group-hover:text-white">
              GitHub
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/diandre-miller/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-blue-500 transition"
          >
            <Linkedin
              size={40}
              className="text-gray-400 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_#3b82f6] transition"
            />
            <span className="mt-3 text-sm text-gray-300 group-hover:text-blue-400">
              LinkedIn
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactMe;