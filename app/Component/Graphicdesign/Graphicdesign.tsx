"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type CategoryKey = "All" | "Thumbnails" | "Branding" | "Social" | "AI & UI";

interface PortfolioItem {
  id: string;
  src: string;
  title: string;
  category: "Thumbnails" | "Branding" | "Social" | "AI & UI";
  categoryLabel: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  // Dhaba Pop Art 5-Slide Carousel Series
  {
    id: "dhaba-pop-art-1",
    src: "/images/dhaba_pop_art_1790429473796.jpg",
    title: "Desi Dhaba Pop Art — Slide 1 (Cover)",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Vibrant retro Indian dhaba pop art visual blending vintage Bollywood aesthetics, expressive street culture, and punchy colors.",
  },
  {
    id: "dhaba-pop-art-2",
    src: "/images/dhaba_slide_2.jpg",
    title: "Desi Dhaba Pop Art — Slide 2 ('Kitne Paranthe The?')",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Iconic Bollywood retro Sholay-inspired parantha special Dhaba creative with vintage Hindi typography and vivid marigold borders.",
  },
  {
    id: "dhaba-pop-art-3",
    src: "/images/dhaba_slide_3.jpg",
    title: "Desi Dhaba Pop Art — Slide 3 ('Shaan-E-Dhaba Biryani')",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "High-octane Indian retro cop Dhaba biryani creative featuring hand-painted highway truck art styling and steaming clay handi.",
  },
  {
    id: "dhaba-pop-art-4",
    src: "/images/dhaba_slide_4.jpg",
    title: "Desi Dhaba Pop Art — Slide 4 ('Chole Bhature Ka Tashan')",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Energetic Punjabi Dhaba chole bhature poster celebrating authentic street food culture with rich halwai aesthetics and truck motifs.",
  },
  {
    id: "dhaba-pop-art-5",
    src: "/images/dhaba_slide_5.jpg",
    title: "Desi Dhaba Pop Art — Slide 5 ('Mogambo Khush Hua')",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Classic Shahi Dhaba dessert special spotlighting warm gulab jamun with legendary Bollywood villain Mogambo pop art illustration.",
  },

  // Indian Pop Art - Jalebi Bai
  {
    id: "jalebi-bai-pop-art",
    src: "/images/jalebi_bai_pop_art.png",
    title: "Jalebi Bai Mashhoor Jalebi Pop Art",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Exquisite Indian pop art creative featuring shimmering golden jalebis, vintage Hindi typography, traditional bangles, and ornate border patterns.",
  },

  // Drishyam Movie Campaign
  {
    id: "drishyam-cover",
    src: "/images/drishyam_cover_poster.png",
    title: "Drishyam: The Conclusion — KA Mall Cinema Poster",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "High-impact cinema advance booking poster designed for KA Mall & PVR Cinemas with gritty thriller mood, character montage, and clear CTAs.",
  },
  {
    id: "drishyam-slide-2",
    src: "/images/drishyam_ticket_offer_slide.png",
    title: "Drishyam: The Conclusion — Advance Booking Offer",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Cinematic promotional carousel slide highlighting early-bird ₹299 ticket bookings with dramatic mystery lighting and bold textured typography.",
  },

  // Craft Cocktails & Nightlife
  {
    id: "cocktail-299-ad",
    src: "/images/cocktails_299_ad_1790426129243.jpg",
    title: "Craft Cocktails @ ₹299 Promotional Ad",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "High-energy social media promotional ad designed for nightlife and bar campaigns with striking neon accents.",
  },
  {
    id: "beverage-ad",
    src: "/images/ad_attractive_graphic_1790424238607.jpg",
    title: "Premium Beverage Campaign Graphic",
    category: "Branding",
    categoryLabel: "Logos & Branding",
    description:
      "Sleek commercial beverage product poster with atmospheric lighting, splash effects, and clean brand layout.",
  },
  {
    id: "canva-drink",
    src: "/images/canva_drink_graphic_1790423998249.jpg",
    title: "Artisanal Drink Social Creative",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Modern refreshment social poster designed with crisp visual hierarchy and Canva typographic polish.",
  },

  // Cocktail Carousel Series
  {
    id: "carousel-cover",
    src: "/images/carousel_slide_1_cover_1790426215053.jpg",
    title: "Cocktail Carousel — Slide 1 (Cover)",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Cover slide for Instagram cocktail carousel featuring bold hero typography and dramatic atmospheric lighting.",
  },
  {
    id: "carousel-old-fashioned",
    src: "/images/carousel_slide_2_old_fashioned_1790426262163.jpg",
    title: "Cocktail Carousel — Slide 2 (Old Fashioned)",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Old Fashioned feature slide with recipe highlights, golden hour tones, and premium cocktail styling.",
  },
  {
    id: "carousel-gin-fizz",
    src: "/images/carousel_slide_3_fizz_1790426287475.jpg",
    title: "Cocktail Carousel — Slide 3 (Gin Fizz)",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Effervescent Gin Fizz spotlight creative highlighting fresh botanical garnish and sparkling textures.",
  },
  {
    id: "carousel-sunset",
    src: "/images/carousel_slide_4_sunset_1790426317259.jpg",
    title: "Cocktail Carousel — Slide 4 (Tequila Sunset)",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Warm gradient sunset cocktail visual illustrating layered flavors and vivid evening vibes.",
  },
  {
    id: "carousel-cta",
    src: "/images/carousel_slide_5_cta_1790426341292.jpg",
    title: "Cocktail Carousel — Slide 5 (Call To Action)",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Engaging carousel finale slide driving audience comments, saves, and bar visits.",
  },

  // YouTube & Gaming Thumbnails
  {
    id: "gaming-impossible-heist",
    src: "/images/gaming_yt_thumb.jpg",
    title: "Impossible Heist — Cyberpunk Gaming Thumbnail",
    category: "Thumbnails",
    categoryLabel: "YouTube & Gaming",
    description:
      "Viral high-CTR YouTube gaming thumbnail featuring explosive vault breach, cyber operative, neon sparks, and 3D textured typography.",
  },
  {
    id: "hitthepipe",
    src: "/images/hitthepipe.png",
    title: "Hit The Pipe — GTA IV Thumbnail",
    category: "Thumbnails",
    categoryLabel: "YouTube & Gaming",
    description:
      "High-CTR gaming thumbnail designed with explosive lighting, character cutouts, and intense action typography.",
  },
  {
    id: "heavtoll",
    src: "/images/heavtoll.png",
    title: "Heavy Toll — GTA IV Thumbnail",
    category: "Thumbnails",
    categoryLabel: "YouTube & Gaming",
    description:
      "Cinematic mission artwork with custom lighting, atmospheric grit, and bold visual storytelling.",
  },
  {
    id: "coding-questions-thumb",
    src: "/images/youtubetemple.png",
    title: "Barclays Coding Questions YouTube Thumbnail",
    category: "Thumbnails",
    categoryLabel: "YouTube & Gaming",
    description:
      "Tech tutorial YouTube thumbnail optimized for high CTR and sharp legibility across desktop and mobile feeds.",
  },

  // Brand Identity & Logos
  {
    id: "aura-luxury-branding",
    src: "/images/luxury_brand_logo.jpg",
    title: "AURA — Luxury AI Brand Identity & Logo",
    category: "Branding",
    categoryLabel: "Logos & Branding",
    description:
      "Minimalist luxury brand identity featuring an embossed geometric gold monogram, textured obsidian paper, and bespoke typography.",
  },
  {
    id: "companylogo",
    src: "/images/Companylogo.png",
    title: "WebTech IT Solutions — Brand Identity Banner",
    category: "Branding",
    categoryLabel: "Logos & Branding",
    description:
      "Futuristic corporate tech identity exploring circuit board iconography, glowing gradients, and clean corporate hierarchy.",
  },
  {
    id: "companylogo2",
    src: "/images/companylogo2.png",
    title: "WebTech IT Solutions — Monogram Logo Mark",
    category: "Branding",
    categoryLabel: "Logos & Branding",
    description:
      "Clean vector monogram logo mark featuring intertwined digital fiber geometry and modern high-tech styling.",
  },
  {
    id: "marinemart",
    src: "/images/MarineMart.jpeg",
    title: "Marine Mart — Maritime Brand Identity",
    category: "Branding",
    categoryLabel: "Logos & Branding",
    description:
      "Commercial maritime trade logo concept combining nautical container ship motifs with crisp coastal wave iconography.",
  },
  {
    id: "soundwave-identity",
    src: "/images/soundwave.jpg",
    title: "SoundWave Studio Solutions — Neon Logo",
    category: "Branding",
    categoryLabel: "Logos & Branding",
    description:
      "Vibrant neon audio waveform logo mark created for an audio engineering and music production studio brand.",
  },
  {
    id: "soundwave-poster",
    src: "/images/template1.png",
    title: "SoundWave Studio Solutions — Commercial Ad",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Commercial music studio service promotion featuring audio mixer hardware, glowing sound wave graphics, and detailed pricing tiers.",
  },

  // Festivals & Cultural Celebrations
  {
    id: "festival1-eid",
    src: "/images/festival1.png",
    title: "Happy Eid — Blessed Beginnings Creative",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Rich cultural celebration banner designed for WebTech IT Solutions with golden crescent moon, ornate mosque, and celebratory typography.",
  },
  {
    id: "festival2-mahanavami",
    src: "/images/festival2.png",
    title: "Happy Maha Navami — Power & Divine Grace",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Devotional festival creative designed for SoundWave Studio Solutions with sacred trishul, damru, golden mandir, and spiritual motifs.",
  },
  {
    id: "festival3-ramnavmi",
    src: "/images/festival3.png",
    title: "Happy Ram Navmi — Divine Grace & Eternal Truth",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Auspicious Ram Navmi celebration banner for WebTech IT Solutions with divine bow and arrow iconography, golden temple, and prayer beads.",
  },
  {
    id: "diwali-webtech",
    src: "/images/diwali-creative.webp",
    title: "Happy Diwali — Festival of Lights",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Traditional Diwali celebration creative designed for WebTech IT Solutions, featuring illuminated diyas and an intricate festive mandala.",
  },
  {
    id: "navratri-webtech",
    src: "/images/navratri-creative.webp",
    title: "Happy Navratri Devotional Artwork",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Vibrant devotional social media greeting honoring Maa Durga, crafted with rich golden hues and traditional iconography.",
  },
  {
    id: "dhanteras-webtech",
    src: "/images/dhanteras-creative.webp",
    title: "Happy Dhanteras — Festival of Prosperity",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Festival of wealth and prosperity creative showcasing an ornate golden diya and shimmering gold coins.",
  },
  {
    id: "newyear-webtech",
    src: "/images/newyear-2026.webp",
    title: "New Year 2026 Celebration Poster",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Fresh beginnings and dreams greeting graphic designed with glowing typography, clock face, and celebratory glitter.",
  },
  {
    id: "christmas-webtech",
    src: "/images/christmas-creative.webp",
    title: "Merry Christmas Holiday Graphic",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Season of joy & cheer Christmas greeting card featuring golden holiday bells, holly leaves, and a red silk ribbon.",
  },
  {
    id: "halloween-webtech",
    src: "/images/halloween-creative.webp",
    title: "Happy Halloween Spooky Creative",
    category: "Social",
    categoryLabel: "Festivals & Social",
    description:
      "Atmospheric Halloween campaign artwork featuring a gothic haunted mansion, full moon silhouette, and glowing jack-o'-lanterns.",
  },

  // AI & UI/UX Concepts
  {
    id: "surreal-ai-artwork",
    src: "/images/surreal_ai_artwork.jpg",
    title: "Cosmic Consciousness — Surreal AI Art",
    category: "AI & UI",
    categoryLabel: "AI & UI/UX",
    description:
      "Breathtaking 3D visual concept exploring cybernetic human consciousness merging with cosmic nebulae and crystalline sacred geometry.",
  },
  {
    id: "neural-cloud-tech",
    src: "/images/neural_cloud_tech.jpg",
    title: "Neural Cloud & Quantum Computing Architecture",
    category: "AI & UI",
    categoryLabel: "AI & UI/UX",
    description:
      "Futuristic 3D isometric cloud computing infrastructure poster with glowing neural data pipelines, crystal servers, and holographic nodes.",
  },
  {
    id: "fintech-app-ui",
    src: "/images/fintech_app_ui.jpg",
    title: "AI Invest — Next-Gen Fintech Mobile UI/UX",
    category: "AI & UI",
    categoryLabel: "AI & UI/UX",
    description:
      "Ultra-modern mobile user experience featuring 3D holographic market trend visualizations, glassmorphism cards, and predictive AI financial insights.",
  },
  {
    id: "jetlag-uiuxmobile",
    src: "/images/uiuxmobile.png",
    title: "JetLag Genius — Smart Travel Mobile UI Mockup",
    category: "AI & UI",
    categoryLabel: "AI & UI/UX",
    description:
      "Luxury mobile interface design featuring circadian rhythm trackers, adaptive sleep clocks, and fluid violet glassmorphism aesthetics.",
  },
];

const categories: { key: CategoryKey; label: string }[] = [
  { key: "All", label: "All Works" },
  { key: "Thumbnails", label: "YouTube & Gaming" },
  { key: "Branding", label: "Logos & Branding" },
  { key: "Social", label: "Festivals & Social" },
  { key: "AI & UI", label: "AI & UI/UX" },
];

export default function Graphicdesign() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const currentItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section id="work" className="relative px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-pink-400 font-semibold uppercase tracking-wider mb-3">
            Portfolio Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Designs &amp; Artworks
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Browse through thumbnails, corporate brand identities, festive campaigns, and AI concepts. All visuals are primarily generated using AI &amp; Antigravity, styled and composed with Canva design touches.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count =
              cat.key === "All"
                ? portfolioItems.length
                : portfolioItems.filter((item) => item.category === cat.key)
                    .length;

            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setSelectedIndex(null);
                }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md shadow-pink-600/30 scale-105"
                    : "bg-neutral-900/80 text-neutral-400 border border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800/90 bg-gradient-to-b from-neutral-900/70 to-neutral-950/90 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 cursor-pointer"
            >
              {/* Image Container with object-contain so full width & height are visible */}
              <div className="relative h-72 sm:h-80 w-full flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950/80 border border-neutral-800/50">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Category Badge overlay */}
                <span className="absolute top-3 left-3 rounded-md bg-neutral-900/90 px-2.5 py-1 text-[11px] font-semibold text-neutral-300 backdrop-blur-md border border-neutral-800">
                  {item.categoryLabel}
                </span>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-pink-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View Full Design</span>
                  </span>
                </div>
              </div>

              {/* Card Meta details */}
              <div className="mt-4 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Fullscreen Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex flex-col items-center max-w-6xl w-full max-h-[94vh] bg-neutral-950 border border-neutral-800 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex w-full items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-pink-500/20 text-pink-400 border border-pink-500/30 px-2.5 py-1 text-xs font-semibold">
                  {currentItem.categoryLabel}
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white truncate max-w-xs sm:max-w-md">
                  {currentItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 mr-2 hidden sm:inline">
                  {selectedIndex !== null ? selectedIndex + 1 : 0} of{" "}
                  {filteredItems.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-1.5 text-sm font-semibold text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div className="relative mt-4 w-full h-[60vh] sm:h-[68vh] flex items-center justify-center">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/90 border border-neutral-700/80 p-3 text-white shadow-xl hover:bg-pink-600 hover:border-pink-500 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/90 border border-neutral-700/80 p-3 text-white shadow-xl hover:bg-pink-600 hover:border-pink-500 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Modal Footer / Description bar */}
            <div className="w-full mt-4 pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400">
              <p className="text-center sm:text-left">{currentItem.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-neutral-500">
                  Tip: Use Left &amp; Right arrows to navigate
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}