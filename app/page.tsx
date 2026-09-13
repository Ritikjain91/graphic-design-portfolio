import Navbar from "./Component/Navbar/Navbar";
import Description from "./Component/Description/Description";
import Graphicdesign from "./Component/Graphicdesign/Graphicdesign";
import Footer from "./Component/Footer/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#08080a] text-neutral-100 selection:bg-pink-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Description />
        <Graphicdesign />
      </main>
      <Footer />
    </div>
  );
}