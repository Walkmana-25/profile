import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import "./globals.css";
import { IconContext } from "react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuta Takahashi",
  description: "Y.Takahashi's Portfolio",
};

const NavbarContents = (classCSS: string) => {
  const constructing = (): string => {
    return "🚧工事中🚧";
  };
  return (
    <ul className={classCSS}>
      <li>
        <div className="tooltip tooltip-bottom" data-tip={constructing()}>
          <a>Profile</a>
        </div>
      </li>
      <li>
        <div className="tooltip tooltip-bottom" data-tip={constructing()}>
          <a>Works</a>
        </div>
      </li>
      <li>
        <div className="tooltip tooltip-bottom" data-tip={constructing()}>
          <a>Contact</a>
        </div>
      </li>
    </ul>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, "h-screen", "w-screen")}>
        <div className="w-full justify-center flex">
          <nav className="absolute flex m-3 w-11/12 bg-inherit rounded justify-between items-center shadow-2xl border-b-2 dark:border-slate-800 border-gray-300">
            <div className="drawer">
              <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-inherit">
                  <div className="flex-none lg:hidden">
                    <label
                      htmlFor="my-drawer-3"
                      aria-label="open sidebar"
                      className="btn btn-square btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <div className="flex-1 px-2 mx-2">
                    <a className="btn btn-ghost" href="/">
                      Yuta Takahashi
                    </a>
                  </div>
                  <div className="flex-none hidden lg:block">
                    {NavbarContents("menu menu-horizontal")}
                  </div>
                </div>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                {NavbarContents("menu p-4 w-80 min-h-full bg-base-200")}
              </div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center h-screen w-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
