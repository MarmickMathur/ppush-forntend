import { motion } from "framer-motion";

const TextInput = () => {
  // Variants for staggered animation
  const textInputVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05, // Stagger duration between each character
      },
    },
  };

  // Variants for individual character animations
  const charVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={textInputVariants}
      initial="initial"
      animate="animate"
    >
      {/* You can replace the value of 'inputText' with your text */}
      {inputText.split("").map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextInput;
