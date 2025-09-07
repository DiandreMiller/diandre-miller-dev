import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

// Todo list: Get started on anti-spam delay submission
const sanitizeText = (val) =>
  DOMPurify.sanitize(val, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();

const ContactMe = () => {
  const navigate = useNavigate();

// State for email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State for anti-spam
  const [canSubmit, setCanSubmit] = useState(false);
  const mountedAtRef = useRef(Date.now());

  useEffect(() => {
    const timeoutId = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(timeoutId);;
  },[])

  // encode sanitized values for Netlify
  const encode = () => {
    const params = new URLSearchParams();
    params.append("form-name", "contact");
    params.append("name", sanitizeText(name));
    params.append("email", sanitizeText(email));
    params.append("message", sanitizeText(message));
    return params.toString();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const elasped = Date.now() - mountedAtRef.current
    if(elasped < 3000) {
      return 'Please waiting before attempting another submission';
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(),
      });
      navigate("/email-sent");
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Oops, something went wrong. Please try again.");
    }
  };

  const onNameChange = (event) => setName(sanitizeText(event.target.value));
  const onEmailChange = (event) => setEmail(sanitizeText(event.target.value));
  const onMessageChange = (event) => setMessage(sanitizeText(event.target.value));

  return (
    <>
    {/* Contact me metadata */}
    <title>Contact | Diandre Miller Dev</title>
    <link
        rel="canonical"
        href="https://diandremillerdev.netlify.app/contact-me"
     />
      <meta
        name="description"
        content="Let’s connect. Hire, collaborate, or ask questions about development—reach out via email, phone, LinkedIn, GitHub, or the contact form."
      />
      <meta property="og:title" content="Contact | Diandre Miller Dev" />
      <meta
        property="og:description"
        content="Get in touch with Diandre Miller Dev for collaborations, freelance work, or engineering opportunities."
      />
      <meta
        property="og:url"
        content="https://diandremillerdev.netlify.app/contact-me"
      />
      <meta
        property="og:image"
        content="https://diandremillerdev.netlify.app/diandre-dev.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | Diandre Miller Dev" />
      <meta
        name="twitter:description"
        content="Reach out via email, phone, LinkedIn, GitHub, or the contact form."
      />
      <meta
        name="twitter:image"
        content="https://diandremillerdev.netlify.app/diandre-dev.png"
      />

      {/* JSON-LD to help search engines understand this is a contact page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact | Diandre Miller Dev",
          url: "https://diandremillerdev.netlify.app/contact-me",
          about: {
            "@type": "Person",
            name: "Diandre Miller",
            jobTitle: "Full Stack Software Engineer",
            url: "https://diandremillerdev.netlify.app/",
            sameAs: [
              "https://github.com/DiandreMiller",
              "https://www.linkedin.com/in/diandre-miller/"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "millerdiandre@gmail.com",
                telephone: "+1-973-780-4709",
                areaServed: "US",
                availableLanguage: ["English"]
              }
            ]
          }
        })}
      </script>
    {/* Page */}
      <main className="min-h-screen bg-neutral-950 text-gray-200 flex items-center justify-center px-6 pt-28 pb-16">
        <section className="max-w-4xl w-full space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Let’s Connect</h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Hiring, collaboration, or questions about development — I’m all ears.
              Use the form or any of the quick links below.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <a
              href="mailto:millerdiandre@gmail.com?subject=Portfolio%20Inquiry"
              className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-red-500 transition"
            >
              <Mail size={40} className="text-gray-400 group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_#ef4444] transition" />
              <span className="mt-3 text-sm text-gray-300 group-hover:text-red-400">Email</span>
            </a>

            <a
              href="tel:+19737804709"
              className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-green-500 transition"
            >
              <Phone size={40} className="text-gray-400 group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_#22c55e] transition" />
              <span className="mt-3 text-sm text-gray-300 group-hover:text-green-400">Call</span>
            </a>

            <a
              href="https://github.com/DiandreMiller"
              target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-white transition"
            >
              <Github size={40} className="text-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#ffffff] transition" />
              <span className="mt-3 text-sm text-gray-300 group-hover:text-white">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/diandre-miller/"
              target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-blue-500 transition"
            >
              <Linkedin size={40} className="text-gray-400 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_#3b82f6] transition" />
              <span className="mt-3 text-sm text-gray-300 group-hover:text-blue-400">LinkedIn</span>
            </a>
          </div>

          {/* Netlify form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg space-y-6"
          >
    
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onNameChange}
                  required
                  maxLength={120}
                  className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-gray-100 outline-none focus:border-green-500"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onEmailChange}
                  required
                  maxLength={254}
                  className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-gray-100 outline-none focus:border-blue-500"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={message}
                onChange={onMessageChange}
                required
                maxLength={5000}
                className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-gray-100 outline-none focus:border-cyan-500"
                placeholder="Tell me about your project, timeline, goals…"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!canSubmit}
                aria-disabled={!canSubmit}
                className="rounded-full border border-green-500 px-6 py-2.5 font-semibold text-green-400 hover:bg-green-500/10 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {canSubmit ? 'Send Message': 'Please Wait'}
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ContactMe;