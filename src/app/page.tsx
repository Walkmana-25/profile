"use client";
import Image from "next/image";
import { SiZenn, SiTwitter, SiSpeakerdeck, SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <main className="inset-0 flex flex-col items-center justify-center border-10">
      <div className="flex max-md:flex-col items-center justify-center">
        <div className="rounded-full w-40 h-40 md:w-auto md:h-auto">
          <Image
            src="/avatar.jpg"
            width={600}
            height={600}
            alt="Yuta Takahashi's icon"
            className="rounded-full w-40 h-40 md:max-w-96 md:max-h-96"
          />
        </div>
        <div className="flex flex-col items-center justify-center py-10 md:px-10">
          <h1 className="text-4xl font-bold">Yuta Takahashi</h1>
          <p className="text-lg m-2">INIAD -Toyo University-</p>
          <p className="text-lg">東洋大学情報連携学部情報連携学科</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 py-10">
        <div className="btn btn-ghost btn-circle">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="https://github.com/Walkmana-25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </IconContext.Provider>
        </div>
        <div className="btn btn-ghost btn-circle">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="https://twitter.com/walkmana_25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter />
            </a>
          </IconContext.Provider>
        </div>
        <div className="btn btn-ghost btn-circle">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="https://speakerdeck.com/walkmana25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiSpeakerdeck />
            </a>
          </IconContext.Provider>
        </div>

        <div className="btn btn-ghost btn-circle">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              href="https://zenn.dev/walkmana_25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiZenn />
            </a>
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 transition-all">
        <a
          href="https://atcoder.jp/users/walkmana25"
          className="btn btn-neutral"
        >
          <IconContext.Provider value={{ size: "0.8em" }}>
            AtCoder
            <FaExternalLinkAlt />
          </IconContext.Provider>
        </a>
      </div>
    </main>
  );
}
