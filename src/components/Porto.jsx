import { useState } from "react";
import { motion } from "framer-motion";
import KARAWITAN from "/src/assets/images/KARAWITAN.png";
import PAKS from "/src/assets/images/PAKS.png";
import OSIS_SMP from "/src/assets/images/OSIS_SMP.png";

const portfolioItems = [
  {
    title: "My Projects",
    description:
      "I love building interactive and visually stunning web applications! My expertise lies in crafting responsive, user-friendly experiences using modern frameworks and styling tools.",
    items: [
      { name: "Inventory System", desc: "Laravel based inventory system with high reliability and data acuracy." },
      { name: "Music Studio", desc: "Inspired from Stembayo Karawitan Group, with a touch of Wordpress styling." },
      { name: "ESP32 Camera", desc: "Built for P5 school event. Perfect combination of cheap components and inovations." },
    ],
  },
  {
    title: "Organization Experience",
    description:
      "Beyond coding, I thrive in teamwork and leadership. I've contributed to cultural organizations and student councils, leading initiatives that foster creativity and collaboration!",
    items: [
      { name: "Karawitan Stembayo", img: KARAWITAN },
      { name: "PAKS Stembayo", img: PAKS },
      { name: "Junior High Council", img: OSIS_SMP },
    ],
  },
];

const Porto = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">Genta's Portfolio</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        {portfolioItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`px-6 py-3 rounded-xl text-lg font-medium transition border-2
              border-transparent hover:border-yellow-400 cursor-pointer ${
                selectedCategory === index
                  ? "bg-yellow-400 text-black"
                  : "bg-black"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Card Section */}
      <motion.div
        key={selectedCategory}
        className="max-w-4xl mx-auto p-6 bg-black text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
          {portfolioItems[selectedCategory].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {portfolioItems[selectedCategory].description}
        </p>

        {/* Card Items */}
        <div className="flex flex-row justify-center gap-4">
          {portfolioItems[selectedCategory].items.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-black rounded-lg shadow-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-24 mx-auto mb-4"
                />
              ) : null}
              <h4 className="text-xl font-semibold">{item.name}</h4>
              {item.desc && <p className="text-gray-300 mt-2">{item.desc}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Porto;