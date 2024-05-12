import Search from "./search";
import Authbutton from "./authbutton";
import { motion } from "framer-motion";

const Topnav = ({ setterm }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(34, 40, 49)",
        }}
        className="bg-white dark:bg-gray-900  w-full z-20 p-5"
      >
        <div className="max-w-screen-xl flex w-full  justify-between ">
          <Search setterm={setterm} />

          <motion.div
            whileHover={{
              backgroundColor: "rgb(238, 238, 238)",
              color: "rgb(49, 54, 63)",
            }}
            style={{
              backgroundColor: "rgb(49, 54, 63)",
              color: "rgb(238, 238, 238)",
            }}
            className="bg-blue-900 text-white rounded-md p-3"
          >
            <Authbutton />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
