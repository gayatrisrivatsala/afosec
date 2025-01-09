import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import ContactSection from "@/components/contact-section";




export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <head />
      <body>
        <Navbar />
          <Providers>{children}</Providers>
          
      </body>
    </html>
  );
}
