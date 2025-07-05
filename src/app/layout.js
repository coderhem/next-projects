import { Ubuntu, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import { ThemeProvider } from "next-themes";

const ubuntuSans = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
});

const OutfitSans = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-outfit',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ubuntuSans.variable} ${OutfitSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={`antialiased`}>
        <div className="flex flex-col items-center justify-between min-h-screen">
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
