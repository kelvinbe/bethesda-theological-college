import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bethesda",
  description: "Rooted in the Word, Ready for the World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ fontSize: "16px" }}>
        <Providers>
          {/* GLOBAL NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main>{children}</main>

          {/* GLOBAL FOOTER */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}