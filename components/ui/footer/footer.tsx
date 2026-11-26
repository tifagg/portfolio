
"use client";

import Link from "next/link";
import React, { useState } from "react";

const projects = [
  {
    title: "security-learning-lab",
    href: "https://github.com/tifagg/security-learning-lab",
    theme: "dark",
    desc: "a little corner where i'm learning about cybersecurity, exploring different concepts, keeping notes and trying out small experiments. i'm still figuring things out as i go, so this is very much a work in progress.",
  },
];

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <footer className="fixed bottom-5 left-5 z-20">
      <button
        type="button"
        onClick={() => setIsShowModal(!isShowModal)}
        aria-label="Open Dev Log"
      >
        <i className="nes-icon is-large star"></i>
      </button>

      {isShowModal && (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10 p-4">
          <div className="nes-dialog w-full max-w-3xl bg-white max-h-[85vh] overflow-y-auto">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsShowModal(false)}
                aria-label="Close Dev Log"
              >
                <i className="nes-icon close is-small"></i>
              </button>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <i className="snes-jp-logo"></i>

              <p className="font-bold">DEV LOG</p>

              <p className="text-xs text-center">
                a collection of things i'm learning, building and
                experimenting with. more updates as i go!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {projects.map((project) => (
                  <Link
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={`nes-container with-title h-full ${
                        project.theme === "dark" ? "is-dark" : ""
                      }`}
                    >
                      <p className="title">{project.title}</p>
                      <p className="text-xs">{project.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
