"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import ContactUs from "./ContactUs";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.getElementsByTagName("body")[0].classList.add("menu_open");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("menu_open");
    }
  };

  const handleOpen = () => setOpen(!open);

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
    setIsSubmenuOpen(false);
  };

  return (
    <>
      <header className="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-6 px-3 md:px-4 sm:px-6 font-sans min-h-[70px] tracking-wide relative z-2s0 sticky top-0 bg-[#0e0f19] z-[2]">
        <div className="flex flex-wrap items-center justify-between gap-3 w-full max-w-screen-xl mx-auto">
          <Link href="/">
            <img src="/logo_2.png" alt="logo" className="w-32 md:w-64" />
          </Link>

          <div
            id="collapseMenu"
            className={`lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-2s0 z-10 ${
              isOpen
                ? "block max-lg:flex max-lg:flex-col transition ease-in-out delay-150"
                : "hidden"
            }`}
          >
            <button
              id="toggleClose"
              onClick={toggleMenu}
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </button>

            <ul className="z-[1px] lg:flex gap-x-2 xl:gap-x-5 max-lg:space-y-3 rounded-lg  max-lg:fixed max-lg:bg-[#171926] max-lg:w-1/2 max-lg:min-w-[350px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-2s0 ">
              <li className="mb-6 hidden max-lg:block">
                <Link onClick={handleClick} href="/">
                  <img src="/logo.png" alt="logo" className="w-36" />
                </Link>
              </li>
              <li className="max-lg:py-3 px-3">
                <Link
                  onClick={handleClick}
                  href="/"
                  className={`hover:text-[#CEFF05] ${
                    pathname === "/" ? "text-[#CEFF05]" : "text-white"
                  } font-bold block text-lg`}
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:py-3 px-3">
                <Link
                  onClick={handleClick}
                  href="/about"
                  className={`hover:text-[#CEFF05] ${
                    pathname === "/about" ? "text-[#CEFF05]" : "text-white"
                  } font-bold block text-lg`}
                >
                  About Us
                </Link>
              </li>
              <li
                className="max-lg:py-3 px-3 relative"
                onMouseEnter={() => setIsSubmenuOpen(true)}
                onMouseLeave={() => setIsSubmenuOpen(false)}
              >
                <div
                  className={`hover:text-[#CEFF05] text-lg text-[15px] font-bold hover:fill-[#CEFF05]  ${
                    pathname.startsWith("/services")
                      ? "text-[#CEFF05] fill-[#CEFF05]"
                      : "text-white fill-white"
                  } fill-white block`}
                  aria-expanded={isSubmenuOpen}
                  onClick={() => setIsSubmenuOpen((prev) => !prev)}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <ul
                  className={`relative  md:absolute shadow-lg bg-[#0e0f19] space-y-3 border-[#212121] rounded-xl border top-0 lg:top-8 max-lg:top-8 -left-6 min-w-[350px] z-2s0 max-h-0 overflow-hidden px-6 transition-all duration-500 ${
                    isSubmenuOpen
                      ? "opacity-100 max-h-[700px] pb-4 pt-6"
                      : "opacity-0"
                  }`}
                  aria-hidden={!isSubmenuOpen}
                >
                  <li className="py-2">
                    <Link
                      onClick={handleClick}
                      href="/services/custom-software-development"
                      className={`hover:text-[#CEFF05] ${
                        pathname.endsWith("/custom-software-development")
                          ? "text-[#CEFF05]"
                          : "text-white"
                      } text-[15px] font-medium block`}
                    >
                      Custom Software Development
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      onClick={handleClick}
                      href="/services/mobile-app-development"
                      className={`hover:text-[#CEFF05] ${
                        pathname.endsWith("/mobile-app-development")
                          ? "text-[#CEFF05]"
                          : "text-white"
                      } text-[15px] font-medium block`}
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      onClick={handleClick}
                      href="/services/web-development"
                      className={`hover:text-[#CEFF05] ${
                        pathname.endsWith("/web-development")
                          ? "text-[#CEFF05]"
                          : "text-white"
                      } text-[15px] font-medium block`}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      onClick={handleClick}
                      href="/services/game-development"
                      className={`hover:text-[#CEFF05] ${
                        pathname.endsWith("/game-development")
                          ? "text-[#CEFF05]"
                          : "text-white"
                      } text-[15px] font-medium block`}
                    >
                      Game Development
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      onClick={handleClick}
                      href="/services/software-integration-and-migration"
                      className={`hover:text-[#CEFF05] ${
                        pathname.endsWith("/software-integration-and-migration")
                          ? "text-[#CEFF05]"
                          : "text-white"
                      } text-[15px] font-medium block`}
                    >
                      Software Integration And Migration
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      onClick={handleClick}
                      href="/services/software-maintenance-and-support"
                      className={`hover:text-[#CEFF05] ${
                        pathname.endsWith("/software-maintenance-and-support")
                          ? "text-[#CEFF05]"
                          : "text-white"
                      } text-[15px] font-medium block`}
                    >
                      Software Maintenance And Support
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="max-lg:py-3 px-3">
                <Link
                  onClick={handleClick}
                  href="/blogs"
                  className={`hover:text-[#CEFF05] ${
                    pathname === "/blogs" ? "text-[#CEFF05]" : "text-white"
                  } font-bold block text-lg`}
                >
                  Blogs
                </Link>
              </li>
              <li className="max-lg:py-3 px-3">
                <Link
                  onClick={handleClick}
                  href="/portfolio"
                  className={`hover:text-[#CEFF05] ${
                    pathname === "/portfolio" ? "text-[#CEFF05]" : "text-white"
                  } font-bold block text-lg`}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center max-lg:ml-auto space-x-5 h-30">
            <div>
              <button
                onClick={handleOpen}
                className="bg-[#CEFF05] text-black p-2 md:px-6 md:py-4 rounded-full transform transition-all duration-500 ease-in-out hover:bg-black hover:text-white hover:scale-105 text-sm font-semibold"
              >
                REQUEST A QUOTE
              </button>
            </div>

            <button
              id="toggleOpen"
              onClick={toggleMenu}
              className="lg:hidden !ml-7"
            >
              <svg
                className="w-7 h-7"
                fill="#fff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <ContactUs handleOpen={handleOpen} />
      </Dialog>
    </>
  );
}
