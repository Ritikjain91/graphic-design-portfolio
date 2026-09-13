"use client";

import Image from "next/image";
import { useState } from "react";

interface PortfolioItem {
  src: string;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  { src: "/images/soundwave.jpg", title: "Soundwave Graphic" },
  { src: "/images/hitthepipe.png", title: "Hit The Pipe - Thumbnail" },
  { src: "/images/heavtoll.png", title: "Heavy Toll - Thumbnail" },
  { src: "/images/aigenrated.png", title: "AI Generated Concept" },
  { src: "/images/festival3.png", title: "Festival Design 3" },
  { src: "/images/festival1.png", title: "Festival Design 1" },
  { src: "/images/festival2.png", title: "Festival Design 2" },
  { src: "/images/uiuxmobile.png", title: "Mobile UI/UX Mockup" },
  { src: "/images/template1.png", title: "YouTube Coding Thumbnail" },
  { src: "/images/youtubetemple.png", title: "YouTube Video Template" },
  { src: "/images/Companylogo.png", title: "Brand Identity Logo" },
  { src: "/images/geminicloud.png", title: "Cloud Infrastructure Graphic" },
  { src: "/images/MarineMart.jpeg", title: "Marine Mart Logo" },
  { src: "/images/companylogo2.png", title: "Corporate Logo Design" },
];

export default function Graphicdesign() {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <section className="min-h-screen bg-black px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          My Designs &amp; Artworks
        </h2>
        <p className="mb-10 text-center text-gray-400 text-sm sm:text-base">
          Click on any design to view it in full width and height
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.src}
              onClick={() => setSelectedImage(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 transition-all duration-300 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/10 cursor-pointer"
            >
              {/* Image Container with fixed height and object-contain so NO edges are cut off */}
              <div className="relative h-72 sm:h-80 w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & View tag */}
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="font-medium text-gray-200 group-hover:text-pink-400 transition-colors">
                  {item.title}
                </span>
                <span className="text-xs text-neutral-400 group-hover:text-white transition-colors bg-neutral-800 px-2 py-1 rounded">
                  View Full ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex flex-col items-center max-w-5xl w-full max-h-[92vh] bg-neutral-950 border border-neutral-800 rounded-2xl p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex w-full items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-lg font-semibold text-white">
                {selectedImage.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-lg bg-neutral-800 px-3 py-1.5 text-sm font-semibold text-gray-300 hover:bg-neutral-700 hover:text-white"
              >
                ✕ Close
              </button>
            </div>

            {/* Full Image Display */}
            <div className="relative mt-4 w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}