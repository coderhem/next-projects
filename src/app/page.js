import Hero from "@/components/Hero/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-[var(--primary)] py-20 text-white">
        <Hero />
      </section>
    </>
  );
}
