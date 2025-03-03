import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { GoArrowDownRight } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full bg-black/70 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center text-white">
      {/* Logo */}
      <a href="#" className="text-2xl md:text-3xl font-semibold">
        GENTA.Porto
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center">
        {[
          { href: "#about", text: "About Me" },
          { href: "#skills", text: "Skills" },
          { href: "#porto", text: "Portfolio" },
          { href: "#contact", text: "Contact" },
        ].map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="opacity-80 hover:opacity-100 transition-all duration-300 hover:underline underline-offset-4"
            >
              {item.text}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:gentapossenti@gmail.com"
            target="_blank"
            className="px-4 py-2 rounded-full flex items-center gap-2 bg-white text-black font-semibold transition-transform duration-200 hover:scale-105 hover:bg-yellow-400"
          >
            Hire Me
            <GoArrowDownRight />
          </a>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <BiX /> : <BiMenu />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black/90 p-8 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-end mb-4">
          <BiX
            className="text-3xl cursor-pointer text-white"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col gap-6 text-lg text-white items-center mt-10">
          {[
            { href: "#about", text: "About Me" },
            { href: "#skills", text: "Skills" },
            { href: "#porto", text: "Portfolio" },
            { href: "#contact", text: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="opacity-80 hover:opacity-100 transition-all duration-300 hover:underline"
                onClick={toggleMenu}
              >
                {item.text}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:gentapossenti@gmail.com"
              target="_blank"
              className="px-3 py-2 rounded-full border border-yellow-400 bg-white text-black flex items-center gap-2 font-semibold transition-transform duration-200 hover:scale-105 hover:bg-yellow-400"
              onClick={toggleMenu}
            >
              Hire Me
              <GoArrowDownRight />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;