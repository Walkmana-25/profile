import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuta Takahashi",
  description: "Y.Takahashi's Portfolio",
  icons: {
    icon: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, "min-h-screen", "w-screen")}>
        <div className="w-full justify-center flex fixed top-0 left-0 z-50">
          <Navbar />
        </div>

        <div className="flex flex-col items-center min-h-screen w-screen pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
