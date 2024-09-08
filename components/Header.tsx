"use client";

import { useState, useEffect } from "react";
import type { JSX } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import config from "../config";
import icon from "../app/Company Logo.png";
import React from "react";

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: "/web-dev",
    label: "Web Design",
  },
  {
    href: "/#pricing",
    label: "Custom Solutions",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href: "/local-seo",
    label: "SEO",
  },
  {
    href: "#contact-section",
    label: "Contact Us",
  },
];

const scrollToContact = () => {
  const contactSection = document.getElementById('contact-section');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const cta: JSX.Element = (
  <button className="btn btn-primary" onClick={scrollToContact}>Get started</button>
);

const Header = () => { 
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-100 to-purple-100">
      <nav
        className="container flex items-center justify-between px-8 py-4 mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo and name on the left */}
          <div className="flex items-center space-x-2 -ml-2 w-1/4">
            <Link
              className="flex items-center gap-2 shrink-0"
              href="/"
              title={`${config.appName} homepage`}
            >
              <Image
                src={icon}
                alt={`${config.appName} logo`}
                className="w-12 h-12"
                placeholder="blur"
                priority={true}
              />
              <span className="font-extrabold text-lg text-gray-800">{config.appName}</span>
            </Link>
          </div>

          {/* Centered links on large screens */}
          <div className="hidden lg:flex justify-center flex-1">
            <div className="flex items-center justify-center space-x-6">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                  title={link.label}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA on the right for large screens */}
          <div className="hidden lg:flex lg:items-center w-1/4 justify-end">
            {cta}
          </div>

          {/* Burger button to open menu on mobile */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-800"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? "" : "hidden"}`}>
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsOpen(false)}></div>
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-l overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              className="flex items-center gap-2 shrink-0"
              title={`${config.appName} homepage`}
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={icon}
                alt={`${config.appName} logo`}
                className="w-12 h-12"
                placeholder="blur"
                priority={true}
              />
              <span className="font-extrabold text-lg text-gray-800">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
                onClick={(e) => {
                  handleLinkClick(e, link.href);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            {cta}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
