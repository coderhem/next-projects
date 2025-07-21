import Hero from "@/components/Hero/hero";
import SectionTitle from "@/components/SectionTitle/section-title";
import Slider from "@/components/Slider/slider";
import TwoCol from "@/components/TwoCol";

export default function Home() {
  return (
    <>
      <section className="bg-[var(--primary)] pt-40 lg:pt-48 pb-5 lg:pb-16 text-white">
        <Hero />
      </section>
      {/* Hero */}

      <section className="py-10 md:py-14 lg:py-20">
        <div className="container">
          <SectionTitle
            orangeText="Discover"
            sectionTitle="Our Highlights"
            descriptionText="Explore our top features, client success stories, and project showcases through this dynamic slider. Swipe to see what makes us stand out."
          />
          <Slider />
        </div>
      </section>

      <section className="pt-5 pb-10 md:pb-14 lg:pb-20">
        <div className="container">
          <SectionTitle
            orangeText="Two"
            sectionTitle="Column Sections"
            descriptionText="Explore our top features, client success stories, and project showcases through this dynamic slider. Swipe to see what makes us stand out."
          />
          <TwoCol />
        </div>
      </section>
    </>
  );
}
