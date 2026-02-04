import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // turbo
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Web Design Lead Generator | Automate Your Sales",
  description: "The system that finds businesses without websites, builds a demo, and hands you the lead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-[#ECFEFF] text-[#164E63] selection:bg-[#22D3EE] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
