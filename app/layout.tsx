import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion",
  description: "Live for Influential and Innovative fashion!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
       <html lang="en">
        <body className={inter.className}>
         
          {children}
         
          </body>
      </html>
    </ClerkProvider>
  );
}
