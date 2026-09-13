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
            Whether you need high-converting YouTube thumbnails, a memorable
            logo, or festive brand creatives, let&apos;s create something extraordinary.
          </p>

          {/* Quick Contact Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-600/30 transition duration-300 hover:scale-105 hover:shadow-pink-500/40"
            >
              ✉ Email Me
            </a>

            <a
              href={`https://wa.me/91${rawPhone}?text=Hi%20Ritik,%20I%20saw%20your%20graphic%20design%20portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/90 border border-emerald-500/40 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition duration-300 hover:bg-emerald-500 hover:scale-105"
            >
              💬 WhatsApp
            </a>

            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3.5 text-sm font-semibold text-neutral-200 transition duration-300 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
            >
              📞 Call: {phone}
            </a>
          </div>

          {/* Copy Shortcuts */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="hover:text-white underline underline-offset-4 decoration-neutral-700 transition-colors"
            >
              {copiedEmail ? "✓ Copied Email!" : `Copy Email: ${email}`}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="hover:text-white underline underline-offset-4 decoration-neutral-700 transition-colors"
            >
              {copiedPhone ? "✓ Copied Phone!" : `Copy Phone: ${phone}`}
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
              Graphic Designer combining the precision of Canva with the limitless
              potential of generative AI to deliver world-class digital visual assets.
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
                  className="hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://canva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Canva Profile ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Ritik Jain. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with passion using{" "}
            <span className="text-pink-500 font-semibold">Canva</span>,{" "}
            <span className="text-purple-400 font-semibold">Next.js</span> &amp;{" "}
            <span className="text-indigo-400 font-semibold">AI Tools</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
