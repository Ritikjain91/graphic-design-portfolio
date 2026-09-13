export default function Description() {
  return (
    <div className="flex mb-7 justify-center bg-black px-6">
      <div className="mt-16 max-w-4xl text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-500 tracking-wider mb-2">
          Hi, my name is Ritik
        </h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Welcome to My Graphic Design Portfolio!
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          I created all the designs in this portfolio using{" "}
          <span className="font-semibold text-white underline decoration-pink-500 decoration-2 underline-offset-4">
            Canva
          </span>
          , along with AI tools such as{" "}
          <span className="font-semibold text-white">
            Claude, Google Gemini, ChatGPT, Kimi, and DeepSeek
          </span>{" "}
          to explore ideas, generate creative concepts, create images, and
          improve my designs.
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-400">
          This portfolio showcases my creativity, design skills, and ability to
          combine traditional design tools with modern AI technology.
        </p>
      </div>
    </div>
  );
}