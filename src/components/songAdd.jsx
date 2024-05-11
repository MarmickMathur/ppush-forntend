import { useState } from "react";
import { motion, spring } from "framer-motion";
import Modalform from "./modalform";

const Addsong = () => {
  const [vis, setvis] = useState(false);
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          rotate: "3deg",
          scale: 0.99,
        }}
        transition={{
          duration: 0.2,
          transition: spring,
        }}
        className="  bg-blue-900 text-white rounded-md p-3"
        onClick={() => setvis(true)}
      >
        addsong
      </motion.button>
      <div>
        <Modalform vis={vis} setvis={setvis} />
      </div>
    </>
  );
};

export default Addsong;
