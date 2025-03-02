import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { GoArrowDownRight } from "react-icons/go";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-4 md:px-8
    lg:px-16 py-8 text-white backdrop-blur-md bg-black/70">      
      {/* Logo */}
      <a href="#home" className="bg-clip-text text-3xl font-semibold">GENTA.Porto</a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 items-center gap-x-8">
        <li><a href="#about" className="cursor-pointer opacity-80 transition-all duration-300
        hover:opacity-100 hover:underline hover:underline-offset-4">About Me</a></li>
        <li><a href="#skills" className="cursor-pointer opacity-80 transition-all duration-300
        hover:opacity-100 hover:underline hover:underline-offset-4">Skills</a></li>
        <li><a href="#porto" className="cursor-pointer opacity-80 transition-all duration-300
        hover:opacity-100 hover:underline hover:underline-offset-4">Portfolio</a></li>
        <li><a href="#contact" className="cursor-pointer opacity-80 transition-all duration-300
        hover:opacity-100 hover:underline hover:underline-offset-4">Contact</a></li>
        <li>
          <button className="px-4 py-2 rounded-full font-semibold border-yellow-400 flex items-center
          gap-1 bg-yellow-400 cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out text-black">Hire Me
          <span><GoArrowDownRight />
          </span>
          </button>
        </li>
      </ul>

      {/* Toggle Button */}
      <div className="md:hidden text-4xl cursor-pointer" onClick={menuOpen}>
        {isOpen ? <BiX /> : <BiMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed right-0 top-[85px] h-screen w-2/5 md:w-1/3 bg-black/90 p-10 flex flex-col 
          items-center justify-start gap-8 opacity-90 transition-all duration-250 duration-300 ease-in-out translate-x-0">
          <ul className="flex flex-col gap-4 text-lg text-white items-center">
            <li>
              <a href="#about" className="cursor-pointer opacity-80 transition-all duration-250
              hover:opacity-100 hover:underline">About</a>
            </li>
            <li>
              <a href="#skills" className="cursor-pointer opacity-80 transition-all duration-250
              hover:opacity-100 hover:underline">Skills</a>
            </li>
            <li>
              <a href="#porto" className="cursor-pointer opacity-80 transition-all duration-250
              hover:opacity-100 hover:underline">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="cursor-pointer opacity-80 transition-all duration-250
              hover:opacity-100 hover:underline">Contact</a>
            </li>
            <li>
              <button
                className="px-4 py-2 rounded-full font-semibold flex items-center gap-2 border-yellow-400 
                bg-yellow-400">
                Hire Me
                <span><GoArrowDownRight /></span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default navbar;
