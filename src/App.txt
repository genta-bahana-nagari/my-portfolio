import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Porto from "./components/Porto";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full bg-neutral-950"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 text-white">
        <Navbar />
        <Hero className="py-5" />
        <About className="py-5" />
        <Skills className="py-5" />
        <Porto className="py-5" />
        <Contact className="py-5" />
        <Footer className="py-5" />
      </main>
    </>
  );
}

export default App
