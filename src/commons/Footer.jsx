import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-neutral-900 border-t border-neutral-700 px-8 py-4 z-50">
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
        {/* Left side */}
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} Diandre Miller. All rights reserved.
        </p>

        {/* Right side: Socials */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/DiandreMiller"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/diandre-miller/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://tiktok.com/@keepit100Dre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center space-x-1"
          >
            {/* TikTok SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M33.9 14.3c-2.3-1.5-4-3.8-4.5-6.7V7h-5.2v23.8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.6 0 1.1.1 1.6.2V19c-.5-.1-1.1-.1-1.6-.1-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11V20.7c1.2 1 2.6 1.8 4.2 2.3 1 .3 2 .5 3.1.6v-5.6c-.6-.1-1.2-.3-1.8-.7z" />
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;