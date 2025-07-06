'use client';
import Footer from "@/components/footer/footer";
import Header from "@/components/Header/header";
import Homepage from "@/pages/home";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <Homepage />
      <Footer />
    </main>
  );
}
