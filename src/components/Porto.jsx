import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "/src/components/porto_cards/ProjectCards";
import OrganizationCard from "/src/components/porto_cards/OrganizationCards";
import KARAWITAN from "/src/assets/images/KARAWITAN.png";
import PAKS from "/src/assets/images/PAKS.png";
import OSIS_SMP from "/src/assets/images/OSIS_SMP.png";
import Sinvent from "/src/assets/images/Sinvent.png";
import Studio from "/src/assets/images/Studio.jpg";
import esp_cam from "/src/assets/images/esp_cam.jpg";

const portfolioItems = [
  {
    title: "My Projects",
    description:
      "I love building interactive and visually stunning web applications! My expertise lies in crafting responsive, user-friendly experiences using modern frameworks and styling tools.",
    component: "ProjectCard",
    items: [
      {
        name: "Inventory System",
        desc: "Laravel based inventory system with high reliability and data accuracy.",
        image: Sinvent,
        previewLink: "https://sinvent.gentabahana.me",
        codeLink: "https://github.com/genta-bahana-nagari/sinvent24",
      },
      {
        name: "Music Studio",
        desc: "Inspired from Stembayo Karawitan Group, with a touch of Wordpress styling.",
        image: Studio,
        previewLink: "https://studio.gentabahana.me",
        codeLink: null,
      },
      {
        name: "ESP32 Camera",
        desc: "Built for P5 school event. Perfect combination of price-friendly components and innovations.",
        image: esp_cam,
        previewLink: null,
        codeLink: "TBA",
      },
    ],
  },
  {
    title: "Organization",
    description:
      "Beyond coding, I thrive in teamwork and leadership. I've contributed to cultural organizations and student councils, leading initiatives that foster creativity and collaboration!",
    component: "OrganizationCard",
    items: [
      { name: "Karawitan Stembayo", image: KARAWITAN },
      { name: "PAKS Stembayo", image: PAKS },
      { name: "Junior High Council", image: OSIS_SMP },
    ],
  },
];

const Porto = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const selectedData = portfolioItems[selectedCategory];

  return (
    <div id="porto" className="py-10 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">Genta's Portfolio</h2>

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
          {selectedData.title}
        </h3>
        <p className="text-sm md:text-lg text-white mb-6">{selectedData.description}</p>

        {/* Card Items */}
        <div className="flex flex-wrap justify-center gap-8">
          {selectedData.items.map((item, index) =>
            selectedData.component === "ProjectCard" ? (
              <ProjectCard key={index} {...item} />
            ) : (
              <OrganizationCard key={index} {...item} />
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Porto;