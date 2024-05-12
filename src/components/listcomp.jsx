import { useContext, useEffect, useState } from "react";
import PlayModal from "./modal";
import { motion } from "framer-motion";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { songContext } from "../context/song";

const Listitem = ({ song, action1, qsongs }) => {
  const { songList, setSongList } = useContext(songContext);
  const [openModal, setOpenModal] = useState(false);
  // useEffect(() => {
  //   setSongList(qsongs);
  //   console.log("Change gua ")
  // } , [qsongs])
  // console.log(index);

  return (
    <>
      <li
        // onClick={() => {
        //   action1(song);
        // }}
        className="w-full flex px-4 py-2 border-b border-gray-200  dark:border-gray-600"
      >
        <div className=" w-6/12">{song}</div>
        <div className=" w-3/12">
          <motion.button
            className={`block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpenModal(true)}
          >
            <BsArrowDownCircleFill className=" scale-125" />
          </motion.button>
          <PlayModal
            openModal={openModal}
            song={song}
            setOpenModal={setOpenModal}
          />
        </div>

        <div
          onClick={() => {
            const temp = qsongs;
            temp.push(song);
            console.log("inside listComp", temp);
            action1(temp);
            console.log("after setting", temp);
            console.log("songs", qsongs);
            setSongList(temp);
          }}
          className=" w-2/12"
        >
          <motion.button
            className={`block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <FaRegCirclePlay className=" scale-125" />
          </motion.button>
        </div>
      </li>
    </>
  );
};

export default Listitem;
