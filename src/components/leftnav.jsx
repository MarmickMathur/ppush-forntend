import DropDown from "./dropdown";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import list from "../../test assets/output.json";

// console.log(list);
const newgnr = new Set(list);
const temparr = Array.from(newgnr);

let gnr = temparr.map((some) => {
  return { label: some, value: some };
});

const artist = [
  { label: "the color red", value: "Red" },
  { label: "the color blue", value: "Blue" },
  { label: "the color green", value: "Green" },
];

const Leftnav = ({ ontagchange }) => {
  const [ganre, setganre] = useState([]);
  const [playlist, setplaylist] = useState([]);

  useEffect(() => {
    let newtags = [];
    // console.log(ganre);
    // console.log(playlist);
    ganre.forEach((gnr) => {
      newtags.push(gnr.value);
    });
    playlist.forEach((ply) => {
      newtags.push(ply.value);
    });
    ontagchange(newtags);
  }, [ganre, playlist]);

  return (
    <>
      <aside
        id="default-sidebar"
        className="z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
        style={{
          color: "rgb(118, 171, 174)",
          
        }}
      >
        <div
          style={{ backgroundColor: "rgb(49, 54, 63)" }}
          className="overflow-y-auto py-5 px-3 h-full "
        >
          <ul className="space-y-2">
            <motion.li layout>
              <DropDown
                key={"playlists"}
                options={artist}
                selected={playlist}
                label={"playlist"}
                onSelectedChange={setplaylist}
              />
            </motion.li>
            <motion.li layout>
              <DropDown
                key={"mylib"}
                options={gnr}
                selected={ganre}
                label={"genre"}
                onSelectedChange={setganre}
              />
            </motion.li>

            <motion.li layout>
              <DropDown
                key={"mylib"}
                options={gnr}
                selected={ganre}
                label={"artist"}
                onSelectedChange={setganre}
              />
            </motion.li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Leftnav;
