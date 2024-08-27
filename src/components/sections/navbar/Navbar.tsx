import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const headerLinks = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Close mobile navbar when screen size >= 1024
  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsNavbarOpen(false);
    };

    window.addEventListener("resize", handler);

    return () => {
      removeEventListener("resize", handler);
    };
  }, []);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  return (
    <header className="fixed left-0 top-0 z-[999] w-full">
      <nav className="flex items-center justify-between bg-black px-6 py-6 text-white shadow-sm shadow-gray-500 sm:px-12">
        {/* Navbar Logo & Links */}
        <h3 className="text-xl font-bold">Benedykt.dev</h3>
        <ul className="hidden gap-4 text-[17px] font-semibold lg:flex">
          {headerLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <li>{link.title}</li>
            </a>
          ))}
        </ul>

        {/* Navbar Hamburger */}
        <button
          onClick={() => setIsNavbarOpen((n) => !n)}
          className="z-[999] block lg:hidden"
        >
          {isNavbarOpen ? <IoClose size={28} /> : <LuMenu size={28} />}
        </button>

        {/* Mobile Navbar */}
        {isNavbarOpen && (
          <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center text-center">
            <ul className="flex flex-col gap-8 text-2xl">
              {headerLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <li>{link.title}</li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export { Navbar };
