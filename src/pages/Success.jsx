import { Link } from "react-router-dom";

const Success = () => (
  <>
    <meta name="robots" content="noindex,follow" />
    {/* Page */}
    <main className="min-h-screen bg-neutral-950 text-gray-200 flex items-center justify-center px-6">
      <section className="relative max-w-2xl w-full">
        <div
          className="absolute -inset-10 rounded-3xl bg-gradient-to-b from-green-600/15 via-emerald-500/10 to-transparent blur-3xl"
          aria-hidden
        />

        <div className="relative w-full rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl backdrop-blur p-12 text-center animate-fade-in-up">

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-500/30">
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10 text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Message sent
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Thanks for reaching out — I’ll get back to you ASAP.
          </p>

          {/* divider */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

          {/* actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-green-500/70 px-6 py-3 text-base font-semibold text-green-400 hover:bg-green-500/10 hover:border-green-500 transition"
            >
              Return Home
            </Link>

            <Link
              to="/contact-me"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-6 py-3 text-base font-semibold text-gray-200 hover:bg-neutral-800 transition"
            >
              Send Another
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Success;