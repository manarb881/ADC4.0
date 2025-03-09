import React, { useState } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function NavBar() {
  const [activeLink, setActiveLink] = useState(null); // Track the active link
  const [menuOpen, setMenuOpen] = useState(false); // Track hamburger menu state

  // Custom renderer function for the countdown
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex flex-wrap justify-center items-center text-l font-bold text-pink-400">
        <div className="mx-2">
          <span>{String(days).padStart(2, "0")}</span>
          <span className="text-white"> Days</span>
        </div>
        <span className="text-white mx-2">:</span>
        <div className="mx-2">
          <span>{String(hours).padStart(2, "0")}</span>
          <span className="text-white"> Hours</span>
        </div>
        <span className="text-white mx-2">:</span>
        <div className="mx-2">
          <span>{String(minutes).padStart(2, "0")}</span>
          <span className="text-white"> Minutes</span>
        </div>
        <span className="text-white mx-2">:</span>
        <div className="mx-2">
          <span>{String(seconds).padStart(2, "0")}</span>
          <span className="text-white"> Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 w-[90%]  text-white md:flex items-center justify-between ml-10 ">
      <div className="flex items-center justify-between w-full md:w-[40%]">
        {/* Logo */}
        <img src="/ADC.png" alt="Logo" className="h-20 md:h-40" />

        {/* Hamburger Menu (small screens only) */}
        <button
          className="md:hidden block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="text-white h-8 w-8" />
        </button>

        {/* Navigation Links (hidden on small screens, shown on large screens) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`hover:text-pink-500 transition-all ${
              activeLink === "welcome" ? "text-pink-500" : ""
            }`}
            onClick={() => setActiveLink("welcome")}
          >
            Welcome
          </Link>
          <Link
            to="/Challenges"
            className={`hover:text-pink-500 transition-all ${
              activeLink === "challenges" ? "text-pink-500" : ""
            }`}
            onClick={() => setActiveLink("challenges")}
          >
            Challenges
          </Link>
        </div>
      </div>

      {/* Countdown Timer (below logo and menu on small screens) */}
      <div className="mt-4 md:mt-0 md:flex md:justify-center">
        <Countdown date={new Date("2025-12-31T23:59:59")} renderer={renderer} />
      </div>

      {/* Hamburger Menu Dropdown (small screens only) */}
      {menuOpen && (
        <div className="absolute top-16 left-[50%] w-[30%] bg-white text-gray-800 p-4 space-y-4 shadow-md z-10">
          <Link
            to="/"
            className={`block hover:text-pink-500 transition-all ${
              activeLink === "welcome" ? "text-pink-500" : ""
            }`}
            onClick={() => {
              setActiveLink("welcome");
              setMenuOpen(false);
            }}
          >
            Welcome
          </Link>
          <Link
            to="/Challenges"
            className={`block hover:text-pink-500 transition-all ${
              activeLink === "challenges" ? "text-pink-500" : ""
            }`}
            onClick={() => {
              setActiveLink("challenges");
              setMenuOpen(false);
            }}
          >
            Challenges
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
