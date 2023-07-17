import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/Teko-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Wheel Of Pearl",
  description: "Spin the wheel and let Pearl decide!",
  openGraph: {
    type: "website",
    url: "wheel-of-pearl.vercel.app",
    title: "Wheel Of Pearl",
    description: "Spin the wheel and let Pearl decide!",
    siteName: "Wheel Of Pearl",
    images: "/icon.png",
  },
  creator: "John Rod Dondoyano",
  publisher: "John Rod Dondoyano",
  authors: [
    { name: "John Rod Dondoyano", url: "https://www.facebook.com/dondycles" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`text-xl leading-none ${myFont.className}`}>
      <head>
        <link rel="shortcut icon" href="icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
