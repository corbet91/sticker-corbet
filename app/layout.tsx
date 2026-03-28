import Header from "@/components/header";
import type { Metadata } from "next";
import { Bungee } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  subsets: ["vietnamese"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bungee", 
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
    <html lang="en">
      <body className={`${bungee.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
