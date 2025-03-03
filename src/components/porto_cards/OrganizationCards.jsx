import { motion } from "framer-motion";

const OrganizationCard = ({ name, image }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <img src={image} alt={name} className="h-16 md:h-23 object-contain mb-2" />
      )}
      <h3 className="text-sm md:text-lg py-3 font-semibold">{name}</h3>
    </motion.div>
  );
};

export default OrganizationCard;
