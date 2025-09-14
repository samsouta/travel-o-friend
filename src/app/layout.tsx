import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ClientHeader from "@/components/layout/ClientHeader";
import TawkProvider from "@/components/layout/TawkProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Travel O Friend is a travel companion app that helps you plan your trips, find local attractions, and get directions to your destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} flex flex-col min-h-screen`}>
        <ClientHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* // chat live  */}
        <TawkProvider/>
      </body>
    </html>
  );
}
