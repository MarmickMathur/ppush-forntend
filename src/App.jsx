import { useEffect, useState } from "react";
import Leftnav from "./components/leftnav";
import Topnav from "./components/topnav";
import SongQueue from "./components/songqueue";
import Songlist from "./components/songlist";
import Musicsplitter from "./components/musicsplitter";
import Addsong from "./components/songAdd";
import { easeInOut, motion, MotionConfig } from "framer-motion";

function App() {
  const [tags, settags] = useState([]);
  const [term, seterm] = useState("");
  const [qsongs, setqsongs] = useState([]);

  useEffect(() => {
    if (term != "") {
      settags([]);
    }
  }, [term]);
  console.log("APP" , qsongs);

  return (
    <>
      <div className="w-screen h-screen">
        <div className="relative">
          <Topnav ontagchange={settags} setterm={seterm} />
        </div>
        <MotionConfig transition={{ duration: 0.8, ease: easeInOut }}>
          <div className="grid grid-cols-12 gap-0">
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="col-span-3"
            >
              <Leftnav ontagchange={settags} />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className=" border-2  border-gray-100 col-span-5"
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
              }}
              className="col-span-4 flex align-middle"
            >
              <div>
                <Addsong />
              </div>
              <div>
                <SongQueue songs={qsongs} />
              </div>
            </motion.div>
          </div>
        </MotionConfig>
      </div>
    </>
  );
}

export default App;
