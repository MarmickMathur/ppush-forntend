import { useState } from "react";
import { motion, spring } from "framer-motion";
import Modalform from "./modalform";

const Addsong = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center">
        <motion.button
          style={{
            backgroundColor: "rgb(50, 50, 50)",
          }}
          whileHover={{
            scale: 1.01,
            backgroundColor: "rgb(238, 238, 238)",
            color: "rgb(49, 54, 63)",
          }}
          whileTap={{
            rotate: "3deg",

            scale: 0.99,
          }}
          transition={{
            duration: 0.2,
            transition: spring,
          }}
          className="   bg-blue-900 text-white rounded-md p-3"
          onClick={() => {
            console.log("fired");
            setOpenModal(true);
          }}
        >
          addsong
        </motion.button>
      </div>
      <Modalform openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Addsong;
