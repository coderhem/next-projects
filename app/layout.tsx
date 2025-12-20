import type { Metadata } from "next";
import { Lato, Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import "font-awesome/css/font-awesome.min.css";

const fontRubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const fontLato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrameHub | Design . Decor. Delight",
  description: "FrameHub Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRubik.variable} ${fontLato.variable} antialiased flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <footer>This is Footer</footer>
      </body>
    </html>
  );
}
