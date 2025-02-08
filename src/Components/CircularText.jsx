import { motion } from "framer-motion";

const CircularText = () => {
  const text = "SCROLL DOWN TO WORK SOCIAL SCAPE";
  const radius = 80; // Adjust the radius of the circular text

  return (
    <div className="relative flex items-center justify-center z-10 w-60 h-60">
      {text.split("").map((char, index) => {
        const angle = (index / text.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.span
            key={index}
            className="absolute text-lg font-bold text-white"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
              transformOrigin: "center",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default CircularText;
