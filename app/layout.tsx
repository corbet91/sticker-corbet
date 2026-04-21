import Header from "@/components/header";
import type { Metadata } from "next";
import { Bungee, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const bungee = Bungee({
  subsets: ["vietnamese"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bungee",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sticker By CorbetCorp",
  description: "Sticker By CorbetCorp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen">
      <body
        className={`${bungee.variable} ${spaceGrotesk.variable} antialiased bg-[#F5F5F5] text-[#333333]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
