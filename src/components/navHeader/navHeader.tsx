"use client";
import React, { useEffect, useState } from "react";
import anime, { AnimeInstance } from "animejs";

export default function NavHeader(): JSX.Element {
  // anime used
  // useEffect(() => {
  //   const animation: AnimeInstance = anime({
  //     targets: 'div',  // Ensure to specify targets instead of just 'div'
  //     translateX: 100,
  //     translateY: { value: 50, easing: 'easeOutExpo' },
  //     direction: 'alternate',
  //     easing: 'easeOutQuad',
  //   });

  //   // Optional: return a cleanup function
  //   return () => {
  //     animation.pause(); // In case you want to pause/stop the animation on unmount
  //   };
  // }, []);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md dark:bg-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Teo Yu Tong
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="relative text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 group"
            >
              About
              <span className="absolute left-0 -bottom-[15px] w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-900 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="relative text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 group"
            >
              Projects
              <span className="absolute left-0 -bottom-[15px] w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-900 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="relative text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 group"
            >
              Contact
              <span className="absolute left-0 -bottom-[15px] w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-900 ease-in-out group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <nav className="flex flex-col space-y-2 pb-4">
            <a
              href="#about"
              className="relative text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              About
              
            </a>
            <a
              href="#projects"
              className="relative text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              Projects
             
            </a>
            <a
              href="#contact"
              className="relative text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
