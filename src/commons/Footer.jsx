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
            href="linkedin.com/in/diandre-miller/"
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
            <span>TikTok</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;