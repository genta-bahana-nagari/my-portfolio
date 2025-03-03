import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaLinux,
  FaNetworkWired,
  FaProjectDiagram,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaCloudflare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiNodered,
  SiArduino,
  SiMariadb,
  SiMikrotik,
  SiCisco,
  SiNginx,
  SiNginxproxymanager,
  SiApache,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Frontend development focuses on building interactive and visually appealing user interfaces. Using modern frameworks and styling tools, I ensure seamless user experience.",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-400" />,
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Backend development involves handling server-side logic, databases, and APIs. I specialize in building scalable and secure backend systems.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MySQL", icon: <FaDatabase className="text-indigo-400" /> },
      { name: "MariaDB", icon: <SiMariadb className="text-white" /> },
      { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    ],
  },
  {
    title: "IoT Development",
    description:
      "IoT Development connects hardware with software to create smart systems. I work with microcontrollers and IoT platforms for automation and real-time data processing.",
    skills: [
      { name: "Arduino", icon: <SiArduino className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "Node-RED", icon: <SiNodered className="text-red-600" /> },
    ],
  },
  {
    title: "Linux Management",
    description:
      "Managing Linux systems for servers, automation, and security. I ensure optimized performance and reliability for production environments.",
    skills: [
      { name: "Linux", icon: <FaLinux className="text-gray-300" /> },
      { name: "Nginx", icon: <SiNginx className="text-green-400" /> },
      {
        name: "Proxy Manager",
        icon: <SiNginxproxymanager className="text-white" />,
      },
      { name: "Apache", icon: <SiApache className="text-[#D22128]" /> },
      {
        name: "Cloudflare",
        icon: <FaCloudflare className="text-orange-400" />,
      },
    ],
  },
  {
    title: "Network Administration",
    description:
      "Network administration involves configuring and managing networks, ensuring security, and optimizing connections.",
    skills: [
      {
        name: "Cisco Router",
        icon: <SiCisco className="text-blue-400" />,
      },
      {
        name: "Mikrotik Routerboard",
        icon: <SiMikrotik className="text-white text-1xl" />,
      },
    ],
  },
  {
    title: "Project Management",
    description:
      "Effective project management is crucial for successful development. I utilize Agile methodologies, planning tools, and teamwork to deliver high-quality projects.",
    skills: [
      {
        name: "Project Planning",
        icon: <FaProjectDiagram className="text-yellow-400" />,
      },
      {
        name: "Agile & Scrum",
        icon: <FaProjectDiagram className="text-green-400" />,
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white" />,
      },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div
      className="scroll-mt-20 py-15 bg-black text-white text-center"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>

      {/* Kategori Tabs */}
      <div
        className="flex justify-center flex-wrap gap-2 md:gap-4 mb-6
        py-5 rounded-3xl"
      >
        {skillCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`px-4 py-2 rounded-lg cursor-pointer hover:border-yellow-400 hover:border transition ${
              selectedCategory === index
                ? "bg-yellow-400 text-black font-bold"
                : "bg-black"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skill Section */}
      <motion.div
        key={selectedCategory}
        className="max-w-3xl mx-auto p-6 bg-black rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4">
          {skillCategories[selectedCategory].title}
        </h3>
        <p className="text-gray-300 mb-6">
          {skillCategories[selectedCategory].description}
        </p>

        {/* Ikon Tech Stack */}
        <div className="flex justify-center gap-10 flex-wrap">
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <motion.div
                className="text-6xl flex items-center justify-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
