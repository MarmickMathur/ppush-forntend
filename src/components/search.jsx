import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import axios from "axios";

const Search = ({ setterm }) => {
  const [input, setInput] = useState("");
  const [rec, setrec] = useState([]);

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  useEffect(
    /*cannot be an async function*/
    () => {
      const search = async () => {
        let temp = [];
        const { data } = await axios.get(
          `https://ppushermusicsuggestion.onrender.com//autocomplete?query=${input}`
        );
        console.log(data);
        for (let i = 0; i < Math.min(10, data.length); i++) {
          temp.push(data[i]);
        }
        setrec(temp);
      };
      if (input !== "") {
        // to check if the component is first time rendered
        search();
      }
    },
    [input]
    /* three options - an array , nothing, an empty array )*/
  );
  let recs = [];
  recs = rec.map((item, index) => {
    return (
      <li key={index}>
        <input
          key={index}
          className="input p-2 w-full  border-b-2 border-gray-500"
          value={item}
          onClick={() => {
            // console.log(item);
            setterm(item);
            setrec([]);
            setInput("");
          }}
        />
      </li>
    );
  });

  return (
    <div className="flex align-middle  w-72 items-center ">
      <div className="w-full">
        <form className="w-full">
          <div className="w-full">
            <input
              className="input p-2   rounded-md w-full border-2 border-gray-500"
              value={input}
              onChange={onInputChange}
              placeholder="search"
            />
            <AnimatePresence>
              {recs.length != 0 && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: easeInOut,
                  }}
                  exit={{ opacity: 0 }}
                  className=" rounded-b-md border-2   border-gray-500 z-50  absolute"
                >
                  {recs}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
