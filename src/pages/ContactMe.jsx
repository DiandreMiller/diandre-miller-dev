import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactMe = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-gray-200 flex items-center justify-center px-6 pb-24 pt-28">
      <section className="max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg p-10 space-y-8">
        <h2 className="text-3xl font-bold text-white text-center border-b border-neutral-700 pb-4">
          Contact Me
        </h2>

        <div className="flex justify-center flex-wrap gap-10 text-gray-400 text-lg">
          {/* Email */}
          <a
            href="mailto:millerdiandre@gmail.com"
            className="hover:text-red-400 hover:drop-shadow-[0_0_8px_#ef4444] transition flex flex-col items-center"
          >
            <Mail size={36} />
            <span className="mt-2 text-sm">Email</span>
          </a>
          {/* Phone */}
          <a
            href="tel:+19737804709"
            className="hover:text-green-400 hover:drop-shadow-[0_0_8px_#22c55e] transition flex flex-col items-center"
          >
            <Phone size={36} />
            <span className="mt-2 text-sm">Call</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/DiandreMiller"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_8px_#ffffff] transition flex flex-col items-center"
          >
            <Github size={36} />
            <span className="mt-2 text-sm">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/diandre-miller/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_#3b82f6] transition flex flex-col items-center"
          >
            <Linkedin size={36} />
            <span className="mt-2 text-sm">LinkedIn</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactMe;