import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import image1 from "/src/assets/images/profile_1.jpg";
import image2 from "/src/assets/images/profile_2.jpg";

// Gunakan path string langsung untuk gambar dari public folder
const images = [image1, image2];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen
    px-10 pt-25 bg-black text-white">
      <motion.div 
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Container Foto Profil */}
        <div className="relative w-[270px] h-[270px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-xl shadow-gray-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt="Profile Picture"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

        {/* Teks Hero */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Hi, I'm <span className="text-yellow-400">
              <Typewriter
                words={["Genta Bahana Nagari"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-3 px-15 text-lg text-gray-300">
            A <span className="text-yellow-400">Developer</span> who loves crafting software,  
            a <span className="text-yellow-400">Network and System Engineer</span> passionate about infrastructure,  
            and a <span className="text-yellow-400">Culture Enthusiast</span> with a deep love for arts, specially
            <span className="text-yellow-400"> karawitan, musical theater, and orchestra.</span>
          </p>

          {/* Tombol Aksi */}
          <div className="mt-6 mb-0 flex flex-row items-center justify-center gap-8">
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-yellow-400 px-6 py-3 text-black font-semibold shadow-lg 
              transition-all duration-300 hover:bg-yellow-500">
              See My Works
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="rounded-full border border-yellow-400 px-6 py-3 text-yellow-400 font-semibold shadow-lg 
              transition-all duration-300 hover:bg-yellow-500 hover:text-black">
              Contact Me
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;