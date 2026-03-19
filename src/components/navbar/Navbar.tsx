import Image from "next/image";
import { NavbarContents } from "./NavbarContents";
import { MobileDrawer } from "./MobileDrawer";
import { NavbarProps } from "./types";

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className="absolute w-full h-full"
    >
      <div
        className={`absolute left-0 right-0 mx-auto flex my-3 w-full justify-between items-center  ${className || ""}`}
      >
        <div className="drawer">
          <input
            id="my-drawer-3"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col justify-center items-center">
            {/* Navbar */}
            <div className="navbar w-10/12 backdrop-blur bg-inherit rounded shadow-2xl border-b-2 dark:border-slate-800 border-gray-300">
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
                  <Image
                    src="/avatar.jpg"
                    width={600}
                    height={600}
                    alt="Yuta Takahashi's icon"
                    className="rounded-full max-h-10 max-w-10"
                  />
                  <p>Yuta Takahashi</p>
                </a>
              </div>
              <div className="flex-none hidden lg:block">
                <NavbarContents className="menu menu-horizontal" />
              </div>
            </div>
          </div>
          <MobileDrawer />
        </div>
      </div>
    </nav >
  );
};
