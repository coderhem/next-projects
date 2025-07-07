// 'use client'
import { Rubik, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Code Smarter | Landing Page Designer",
  description: "Landing Page Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable} antialiased`}>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
