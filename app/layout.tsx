import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/Teko-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Wheel Of Pearl",
  description: "Wheel Of Pearl",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`text-xl leading-none ${myFont.className}`}>
      <body>{children}</body>
    </html>
  );
}
