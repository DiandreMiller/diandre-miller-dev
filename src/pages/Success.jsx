import { Link } from "react-router-dom";

const Success = () => (
  <main className="min-h-screen bg-neutral-950 text-gray-200 flex items-center justify-center px-6 pt-28 pb-16">
    <section className="max-w-xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-10 text-center space-y-4">
      <h1 className="text-3xl font-extrabold text-white">Thanks! 🎉</h1>
      <p className="text-gray-300">
        Your message has been sent. I’ll get back to you ASAP.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-full border border-green-500 px-5 py-2.5 text-sm font-semibold text-green-400 hover:bg-green-500/10 transition"
      >
        Return Home
      </Link>
    </section>
  </main>
);

export default Success;