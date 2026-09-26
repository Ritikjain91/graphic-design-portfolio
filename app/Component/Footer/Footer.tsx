"use client";

import { useState } from "react";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "jainritik829@gmail.com";
  const phone = "+91 8518900153";
  const rawPhone = "8518900153";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <footer id="contact" className="relative border-t border-neutral-800/80 bg-neutral-950 px-6 pt-20 pb-12 sm:px-8">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-purple-900/15 via-pink-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        {/* Main CTA Box */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-300 mb-4">
            Let&apos;s Collaborate
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Ready to bring your creative vision to reality?
          </h2>

          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you need high-converting YouTube thumbnails, memorable brand logos, or festive social creatives, let&apos;s craft something extraordinary together.
          </p>

          {/* Quick Contact Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-600/30 transition duration-300 hover:scale-105 hover:shadow-pink-500/40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Me</span>
            </a>

            <a
              href={`https://wa.me/91${rawPhone}?text=Hi%20Ritik,%20I%20saw%20your%20graphic%20design%20portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/90 border border-emerald-500/40 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:bg-emerald-500 hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3.5 text-sm font-semibold text-neutral-200 transition duration-300 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: {phone}</span>
            </a>
          </div>

          {/* Copy Shortcuts */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 hover:text-white underline underline-offset-4 decoration-neutral-700 transition-colors"
            >
              {copiedEmail ? (
                <span className="text-emerald-400 font-medium">✓ Copied Email!</span>
              ) : (
                `Copy Email: ${email}`
              )}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1 hover:text-white underline underline-offset-4 decoration-neutral-700 transition-colors"
            >
              {copiedPhone ? (
                <span className="text-emerald-400 font-medium">✓ Copied Phone!</span>
              ) : (
                `Copy Phone: ${phone}`
              )}
            </button>
          </div>
        </div>

        {/* Bottom Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-800/80">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-600 to-purple-600 font-extrabold text-white text-sm shadow-md">
                RJ
              </div>
              <span className="text-lg font-bold text-white">Ritik Jain</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-4">
              Visual Designer leveraging Google Antigravity &amp; generative AI to create
              striking digital artwork, refined with Canva for typography, layouts, and bespoke design touches.
            </p>
            <div className="space-y-1 text-sm text-neutral-300">
              <p>
                <span className="text-neutral-500">Email:</span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {email}
                </a>
              </p>
              <p>
                <span className="text-neutral-500">Phone:</span>{" "}
                <a
                  href={`tel:${phone}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  {phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About &amp; Bio
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  AI &amp; Tools Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-300 mb-4">
              Connect &amp; Social
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a
                  href="https://github.com/Ritikjain91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  GitHub
                  <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  LinkedIn
                  <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  Instagram
                  <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://canva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  Canva Profile
                  <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Ritik Jain. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with passion using{" "}
            <span className="text-fuchsia-400 font-semibold">Antigravity</span>,{" "}
            <span className="text-pink-500 font-semibold">Canva</span>,{" "}
            <span className="text-purple-400 font-semibold">Next.js</span> &amp;{" "}
            <span className="text-indigo-400 font-semibold">AI Models</span>
          </p>
        </div>
      </div>
    </footer>
  );
}