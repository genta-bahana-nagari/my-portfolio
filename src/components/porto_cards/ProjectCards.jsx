import { motion } from "framer-motion";

const ProjectCard = ({ name, desc, image, previewLink, codeLink }) => {
  return (
    <motion.div
      className="p-4 bg-black text-white flex flex-col shadow-lg w-80 rounded-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="h-40 w-full object-cover rounded-md mb-4"
        />
      )}
      <h4 className="text-xl font-semibold">{name}</h4>
      {desc && <p className="text-white mt-2">{desc}</p>}
      <div className="mt-4 flex items-center justify-center space-x-4">
        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-b border-white hover:text-gray-300"
          >
            Live Preview
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-b border-white hover:text-gray-300"
          >
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;