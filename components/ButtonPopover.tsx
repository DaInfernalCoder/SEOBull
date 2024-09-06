"use client";

import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

const ButtonPopover = () => {
  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button className="btn">
            SEO Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 duration-200 ${
                open ? "transform rotate-180 " : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-full sm:max-w-sm lg:max-w-2xl transform">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-base-content ring-opacity-5">
                <div className="relative grid gap-4 bg-base-100 p-4 lg:grid-cols-2">
                  <Link href="/national-seo" className="text-sm flex items-center gap-3 p-2 cursor-pointer hover:bg-base-200 rounded-lg duration-200">
                    <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold">National SEO</p>
                      <p className="opacity-70">
                        Dominate search results nationwide
                      </p>
                    </div>
                  </Link>
                  <Link href="/local-seo" className="text-sm flex items-center gap-3 p-2 cursor-pointer hover:bg-base-200 rounded-lg duration-200">
                    <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-orange-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-orange-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold">Local SEO</p>
                      <p className="opacity-70">
                        Boost your local online presence
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ButtonPopover;
