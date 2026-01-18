import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMS - Integrated Medtech Solutions | Coming Soon",
  description: "Revolutionary Electronic Medical Equipment for Orthopaedic, Neuro & Spine Surgeries. Titan, Titus Electronic Tourniquets | Mustang Battery Drill | Tornado High Speed Surgical Drill",
  keywords: "medical equipment, tourniquet, surgical drill, orthopaedic, neuro surgery, spine surgery, IMS, Integrated Medtech Solutions",
  openGraph: {
    title: "IMS - Integrated Medtech Solutions | Coming Soon",
    description: "Revolutionary Electronic Medical Equipment for Orthopaedic, Neuro & Spine Surgeries",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
