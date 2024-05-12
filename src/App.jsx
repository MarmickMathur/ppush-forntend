import { useEffect, useState } from "react";
import Leftnav from "./components/leftnav";
import Topnav from "./components/topnav";
import SongQueue from "./components/songqueue";
import Songlist from "./components/songlist";
import Musicsplitter from "./components/musicsplitter";
import Addsong from "./components/songAdd";
import { color, easeInOut, motion, MotionConfig } from "framer-motion";

function App() {
  const [tags, settags] = useState([]);
  const [term, seterm] = useState("");
  const [qsongs, setqsongs] = useState([]);
  const [cursong, setcursong] = useState(0);

  console.log("qsongs :", qsongs);
  console.log("cursong : ", cursong);

  useEffect(() => {
    if (term != "") {
      settags([]);
    }
  }, [term]);
  console.log("APP", qsongs);

  return (
    <div
      style={{ backgroundColor: "rgb(49, 54, 63)" }}
      className="w-screen overflow-y-hidden overflow-x-hidden h-screen"
    >
      <div className="relative">
        <Topnav ontagchange={settags} setterm={seterm} />
      </div>
      <MotionConfig transition={{ duration: 0.8, ease: easeInOut }}>
        <div className="grid grid-cols-12 gap-0">
          <motion.div
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgb(34, 40, 49)",
              shadow: "100px 40px 60px rgb(118, 171, 174)",
            }}
            className="col-span-3"
          >
            <Leftnav ontagchange={settags} />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgb(34, 40, 49)",
            }}
            className=" col-span-5"
          >
            <Songlist
              tags={tags}
              term={term}
              qsongs={qsongs}
              onsongchange={setqsongs}
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgb(34, 40, 49)",
            }}
            className="col-span-4 w-full flex align-middle"
          >
            <div className="w-full">
              <Addsong />
            </div>
            <div>
              <Musicsplitter
                cursong={cursong}
                qsongs={qsongs}
                onhandlechange={setqsongs}
              />
              <button
                onClick={() => {
                  setcursong((cursong + 1) % qsongs.length);
                }}
              >
                next
              </button>
              <button
                onClick={() => {
                  setcursong(
                    (((cursong - 1) % qsongs.length) + qsongs.length) %
                      qsongs.length
                  );
                }}
              >
                prev
              </button>
            </div>
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
}

export default App;
