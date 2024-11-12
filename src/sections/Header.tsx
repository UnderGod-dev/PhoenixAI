"use client";

import Button, { ButtonProps } from "@/components/Button";
import Logo from "@/components/Logo";
import Orbit from "@/components/Orbit";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <header className="border-b border-[var(--color-border)] z-40 w-full overflow-x-hidden fixed ">
        <div className="container ">
          <div className="h-18 lg:h-20 flex justify-between items-center bg-red-3000  w-full backdrop-blur-xl">
            <div className="flex gap-4 items-center">
              <Logo />
              <div className="font-extrabold text-2xl">Phoenix.io</div>
            </div>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }, index) => (
                  <Link
                    href={href}
                    key={index}
                    className="h-full px-10 relative font-bold text-xs tracking-widest uppercase text-gray-400 inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:content-[''] last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ buttonVariant, name, href }) => (
                <Link
                  href={href}
                  key={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Button key={href} variant={buttonVariant}>
                    {name}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="size-10 rounded-lg border-2 border-transparent relative [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-teal-300),var(--color-amber-300),var(--color-violet-400))_border-box]"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
              >
                <div
                  className={twMerge(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 transition duration-300",
                    isMobileNavOpen && "translate-y-0 rotate-45 "
                  )}
                >
                  <div className="w-4 h-0.5 bg-gray-100"></div>
                </div>
                <div
                  className={twMerge(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1 transition duration-300",
                    isMobileNavOpen && "translate-y-0 -rotate-45 "
                  )}
                >
                  <div className="w-4 h-0.5 bg-gray-100"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed overflow-hidden top-18 left-0 bottom-0 right-0 bg-gray-950 z-30">
          <Orbit size={200} />
          <Orbit size={350} />
          <Orbit size={500} />
          <Orbit size={650} />
          <Orbit size={800} />
          <div className="container h-full">
            <nav className="flex flex-col items-center gap-4 py-8  h-full justify-center">
              {navItems.map(({ name, href }) => (
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                      setIsMobileNavOpen(false);
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  href={href}
                  key={href}
                  className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10"
                >
                  {name}
                </Link>
              ))}
              {loginItems.map(({ buttonVariant, name, href }) => (
                <Link href={href} key={href} className="w-full max-w-xs">
                  <Button key={href} variant={buttonVariant} block>
                    {name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
