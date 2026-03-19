import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuta Takahashi",
  description: "Y.Takahashi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflow: "hidden" }}>
      <body className={(inter.className, "h-screen", "w-screen")}>
        <div className="w-full justify-center flex">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
