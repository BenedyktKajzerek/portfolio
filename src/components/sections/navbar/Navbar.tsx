import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { HEADER_LINKS } from "../../../data";
import { AnimatePresence, motion } from "framer-motion";

const navbarVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

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
      <nav className="flex items-center justify-between bg-grey-dark px-6 py-6 text-white sm:px-12">
        {/* Navbar Logo & Links */}
        <h3 className="z-[999] text-xl font-bold">
          <a href={HEADER_LINKS[0].href}>Benedykt.dev</a>
        </h3>
        <ul className="hidden gap-4 text-[17px] font-semibold lg:flex">
          {HEADER_LINKS.map((link, index) => (
            <a key={index} href={link.href}>
              <li className="transition-colors hover:text-primary">
                {link.title}
              </li>
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
        <AnimatePresence>
          {isNavbarOpen && (
            <motion.div
              variants={navbarVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 h-screen w-full origin-top bg-grey-dark p-10 text-center"
            >
              <div className="flex h-full flex-col">
                <motion.div
                  variants={containerVariants}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex h-full flex-col items-center justify-center gap-12"
                >
                  {HEADER_LINKS.map((link, index) => (
                    <div className="overflow-hidden">
                      <motion.div variants={mobileLinkVariants}>
                        <a
                          key={index}
                          href={link.href}
                          className="overflow-hidden text-4xl font-semibold transition-colors hover:text-primary"
                        >
                          <div>{link.title}</div>
                        </a>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export { Navbar };
