import image3 from "/src/assets/images/profile_3.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="bg-black text-white">
      <motion.div
        className="container mx-auto grid md:grid-cols-2 items-center gap-2 md:gap-8 px-6
        md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Text Section */}
        <motion.div
          className="p-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mt-3 my-8 text-sm md:text-base font-bold text-white text-center max-w-md mx-auto">
            I'm a dedicated{" "}
            <span className="text-yellow-400">
              Vocational High School student
            </span>{" "}
            from Yogyakarta, Indonesia. Passionate about learning and adapting
            to new challenges, I am currently preparing for an
            <span className="text-yellow-400"> internship</span> to gain
            hands-on experience and enhance my skills through real-world
            projects.
            <br />
            <br />
            My journey is driven by a strong desire to grow, make my family
            proud, and contribute effectively in every task I take on. I
            specialize in{" "}
            <span className="text-yellow-400">
              Web Development, Network,{" "}
            </span>{" "}
            <span className="text-white">and</span>
            <span className="text-yellow-400"> System Administration</span>,
            enjoying the process of solving complex problems, collaborating with
            teams, and creating valuable solutions.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="p-4 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={image3}
            alt="Profile"
            className="h-80 w-[250px] max-w-sm object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="container mx-auto flex flex-col items-center text-center px-6 pt-10 md:py-5 md:px-12 mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Garis dekorasi atas */}
        <motion.div
          className="w-35 h-1 bg-white rounded-full md-2 md:mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <h1 className="text-xl md:text-3xl py-3 font-serif italic text-white font-bold">
          "Help me to do it myself"
        </h1>

        {/* Garis dekorasi bawah */}
        <motion.div
          className="w-35 h-1 bg-white rounded-full md-2 md:mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default About;
