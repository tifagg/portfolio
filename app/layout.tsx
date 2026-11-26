
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";
import { Footer, Header, LabMascot } from "@/components/ui";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tifa's Workshop | Personal Website",
  description:
    "A little corner of the internet where I explore programming, cybersecurity, technology, and random experiments. Still learning, still building xD",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <Header />
        {children}
        <LabMascot />
        <Footer />
      </body>
    </html>
  );
}
