import Header from "./Header";
import HeroSection from "./HeroSection";
import WhyChooseUsxSection from "./WhyChooseUsxSection";
import FaqSection from "./FaqSection";

export function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="pt-16">
          <HeroSection />
          <WhyChooseUsxSection />
          <FaqSection />
        </div>
      </main>
    </>
  );
}
