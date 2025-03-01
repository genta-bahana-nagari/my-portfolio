import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";

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
      <ul className="hidden md:flex gap-10">
        <li><a href="#home" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Home</a></li>
        <li><a href="#about" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">About</a></li>
        <li><a href="#skills" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Skills</a></li>
        <li><a href="#porto" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Portfolio</a></li>
        <li><a href="#contact" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Contact</a></li>
      </ul>

      {/* Toggle Button */}
      <div className="md:hidden text-4xl cursor-pointer" onClick={menuOpen}>
        {isOpen ? <BiX /> : <BiMenu />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[85px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 bg-black/90 p-12">
          <ul className="flex flex-col gap-6">
            <li><a href="#home" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Home</a></li>
            <li><a href="#skills" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Skills</a></li>
            <li><a href="#porto" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Portfolio</a></li>
            <li><a href="#contact" className="cursor-pointer opacity-80 transition-all duration-250 hover:opacity-100">Contact</a></li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default navbar;
