import Hero from "@/components/Hero/hero";
import Slider from "@/components/Slider/slider";

export default function Home() {
  return (
    <>
      <section className="bg-[var(--primary)] pt-40 lg:pt-48 pb-16 text-white">
        <Hero />
      </section>
      <Slider />
    </>
  );
}
