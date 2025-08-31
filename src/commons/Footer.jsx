const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black px-8 py-4 z-50">
      <p className="text-center text-white text-sm">
        © {new Date().getFullYear()} Diandre Miller. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;