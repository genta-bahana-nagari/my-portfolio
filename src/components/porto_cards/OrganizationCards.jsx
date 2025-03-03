import { motion } from "framer-motion";

const OrganizationCard = ({ name, role, what_i_do, image }) => {
  return (
    <motion.div
      className="flex flex-row items-center text-left bg-gray-900 text-white p-5 rounded-lg shadow-lg w-full max-w-3xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Bagian Gambar di Sebelah Kiri */}
      {image && (
        <img
          src={image}
          alt={name}
          className="h-24 w-24 md:h-32 md:w-32 object-contain rounded-lg mr-5"
        />
      )}

      {/* Bagian Teks di Sebelah Kanan */}
      <div className="flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
        <p className="text-sm md:text-base text-yellow-400 font-medium">{role}</p>
        <p className="text-xs md:text-base text-gray-300 mt-2">{what_i_do}</p>
      </div>
    </motion.div>
  );
};

export default OrganizationCard;
