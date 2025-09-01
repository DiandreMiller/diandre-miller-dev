import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactMe = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // helper: encode FormData into x-www-form-urlencoded
  const encode = (formData) => new URLSearchParams(formData).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // guard against double-click

    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Netlify requires form-name in the POST body
    formData.set("form-name", "contact");

    // Log values before sending
    console.log("Message being sent:", Object.fromEntries(formData.entries()));

    try {
      await axios.post("/", encode(formData), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      navigate("/success");
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Oops, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
          {/* Netlify registration fields */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text" name="name" required
                className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-gray-100 outline-none focus:border-green-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email" name="email" required
                className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-gray-100 outline-none focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message" rows="5" required
              className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-gray-100 outline-none focus:border-cyan-500"
              placeholder="Tell me about your project, timeline, goals…"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-full border px-6 py-2.5 font-semibold transition
                ${isSubmitting
                  ? "border-neutral-700 text-neutral-400 cursor-not-allowed"
                  : "border-green-500 text-green-400 hover:bg-green-500/10"
                }`}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-current"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending…
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactMe;