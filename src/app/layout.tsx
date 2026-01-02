import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "জুলাই জাতীয় সনদ ২০২৫ | গণভোটের ডাক",
  description: "আগামীর সংবিধান, আপনার হাতে। ১২ই ফেব্রুয়ারি ২০২৬।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={`${anekBangla.variable} antialiased min-h-screen bg-mesh-mint selection:bg-primary-green selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
