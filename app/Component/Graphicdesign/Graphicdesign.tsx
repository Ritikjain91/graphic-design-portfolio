import Image from "next/image";

const images: string[] = [
  "/images/soundwave.jpg",
  "/images/hitthepipe.png",
  "/images/heavtoll.png",
  "/images/aigenrated.png",
  "/images/festival3.png",
  "/images/festival1.png",
  "/images/festival2.png",
  "/images/uiuxmobile.png",
  "/images/template1.png",
  "/images/youtubetemple.png",
  "/images/Companylogo.png",
  "/images/geminicloud.png",
  "/images/MarineMart.jpeg",
  "/images/companylogo2.png",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-white">
        My Graphic Design Portfolio
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => {
          const label = image.split("/").pop()?.split(".")[0] ?? "design";
          return (
            <div
              key={image}
              className="relative h-104 w-full overflow-hidden rounded-xl"
            >
              <Image
                src={image}
                alt={`Portfolio design: ${label}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}