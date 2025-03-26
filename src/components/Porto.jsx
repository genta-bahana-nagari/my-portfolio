import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "/src/components/porto_cards/ProjectCards";
import OrganizationCard from "/src/components/porto_cards/OrganizationCards";
import image_1 from "/src/assets/images/your_image_1.jpg";
import image_2 from "/src/assets/images/your_image_2.jpg";
import image_3 from "/src/assets/images/your_image_3.jpg";
import image_4 from "/src/assets/images/your_image_4.jpg";
import image_5 from "/src/assets/images/your_image_5.jpg";
import image_6 from "/src/assets/images/your_image_6.jpg";

const portfolioItems = [
  {
    title: "My Projects",
    description: (
      <>
        I love building anything about technology. My expertise lies in crafting
        responsive, user-friendly experiences using modern frameworks and
        styling tools. Also tinkering with numerous modules to build a
        masterpiece. Check my{" "}
        <span className="text-yellow-300">other projects</span> on{" "}
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 hover:underline transition-all duration-200"
        >
          my GitHub!
        </a>
      </>
    ),
    component: "ProjectCard",
    items: [
      {
        name: "Project Title",
        desc: "Type your project description here",
        image: image_1,
        previewLink: "your link to demo project",
        codeLink: "your github repo",
      },
      {
        name: "Project Title",
        desc: "Type your project description here",
        image: image_2,
        previewLink: "your link to demo project",
        codeLink: "your github repo",
      },
      {
        name: "Project Title",
        desc: "Type your project description here",
        image: image_3,
        previewLink: "your link to demo project",
        codeLink: "your github repo",
      },
    ],
  },
  {
    title: "Organization",
    description:
      "Beyond coding, I’m passionate about [your organization, or you can change to your fav stuff. Get creative folks!]",
    component: "OrganizationCard",
    items: [
      {
        name: "Organization Name",
        year: "Year or period of yout duty",
        role: "Your role in that organization",
        what_i_do:
          "Type your details here.",
        image: image_4,
      },
      {
        name: "Organization Name",
        year: "Year or period of yout duty",
        role: "Your role in that organization",
        what_i_do:
          "Type your details here.",
        image: image_5,
      },
      {
        name: "Organization Name",
        year: "Year or period of yout duty",
        role: "Your role in that organization",
        what_i_do:
          "Type your details here.",
        image: image_6,
      },
    ],
  },
  {
    title: "Download Portfolio",
    description: "You can check the other stuff in PDF format here.",
    component: "DownloadPortfolio",
    items: [],
  },
];

const Porto = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const selectedData = portfolioItems[selectedCategory];

  return (
    <div
      id="porto"
      className="scroll-mt-20 py-10 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Genta's Portfolio</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 px-4">
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
        className="w-full md:max-w-4xl mx-auto p-6 bg-black text-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
          {selectedData.title}
        </h3>
        <p className="text-sm md:text-lg text-white mb-6">
          {selectedData.description}
        </p>

        {/* Card Items */}
        {selectedData.component === "DownloadPortfolio" ? (
          <div className="flex justify-center">
            {/* Portfolio links */}
            <a
              href="#"
              target="_blank"
              download="Genta_Portfolio.pdf"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg
              hover:bg-yellow-500 transition-all hover:scale-115"
            >
              Download Here
            </a>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {selectedData.items.map((item, index) =>
              selectedData.component === "ProjectCard" ? (
                <ProjectCard key={index} {...item} />
              ) : (
                <OrganizationCard key={index} {...item} />
              )
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Porto;
