"use client";
import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-t-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <div className="font-extrabold text-2xl">Phoenix.io</div>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {navItems.map(({ name, href }, index) => (
              <Link
                href={href}
                key={index}
                className="uppercase text-xs tracking-widest font-bold text-gray-400 "
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:justify-between items-center gap-8 mt-16">
          <div className="flex justify-center gap-6">
            {socialLinks.map((socialLink, index) => (
              <Link key={index} href={socialLink.href}>
                <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={socialLink.icon} className="size-4" />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-gray-500">
            &copy; underGod Dev, All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
