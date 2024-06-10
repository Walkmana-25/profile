"use client";
import Image from "next/image";
import { SiZenn, SiTwitter, SiSpeakerdeck, SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="flex max-md:flex-col items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9Sein3gZllZ5ycT5ycCOrki0p90TySVYKw&s"
          alt=""
          className="rounded-full w-40 h-40 md:w-auto md:h-auto"
        />
        <div className="flex flex-col items-center justify-center py-10 md:px-10">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p className="text-lg">Welcome to my website</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 py-10">
        <div className="">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </IconContext.Provider>
        </div>
        <div className="">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter />
            </a>
          </IconContext.Provider>
        </div>
        <div className="">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiSpeakerdeck />
            </a>
          </IconContext.Provider>
        </div>

        <div className="">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiZenn />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </main>
  );
}
