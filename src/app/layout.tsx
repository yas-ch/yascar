import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YasCar | Louez votre voiture facilement au Maroc",
  description: "Location de voitures de luxe, SUV et économiques à Casablanca, Rabat, Marrakech et Tanger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col relative`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
