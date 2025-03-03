import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Porto from "./components/Porto";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <div className="fixed -z-10 min-h-screen w-full bg-black"></div>

    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 text-white">
      <Navbar />
      <Hero className="py-1" />
      <About className="py-1" />
      <Skills className="py-1" />
      <Porto className="py-1" />
      <Contact className="py-1" />
      <Footer className="py-1" />
    </main>
  </StrictMode>
);
