import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import "./globals.css";
import { IconContext } from "react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-slate-300 to-slate-200">
          <nav className="w-full p-3 bg-transparent">
            <div className="flex justify-between items-center">
              <p className="text-lg">hi</p>
              <p>hi</p>
              <div className="mx-1">
                <GiHamburgerMenu />
              </div>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
