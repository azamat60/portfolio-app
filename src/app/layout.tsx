import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azamat Altymyshev — Senior Fullstack Developer (React)",
  description:
    "Senior Fullstack Developer (React) with more than 7 years of experience building responsive, technically sound web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="bg-glow" aria-hidden />
        {children}
      </body>
    </html>
  );
}
