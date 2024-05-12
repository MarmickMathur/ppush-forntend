import { useState, useEffect } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const DropDown = ({ options, selected, label, onSelectedChange }) => {
  const [open, setopen] = useState(false);
  const [ops, setops] = useState([]);

  useEffect(() => {
    let temp = options.map((option) => {
      if (selected.includes(option)) {
        return (
          <div
            key={option.value}
            style={{ color: "red" }}
            onClick={() => changeops(option)}
            className="item"
          >
            {option.label}
          </div>
        );
      }
      return (
        <div
          key={option.value}
          onClick={() => changeops(option)}
          className="item"
        >
          {option.label}
        </div>
      );
    });
    setops(temp);
  }, [selected]);

  // useEffect(() => {
  //   if (open) setdis("block");
  //   else {
  //     setdis("none");
  //   }
  // }, [open]);

  const changeops = (e) => {
    let temp = [];
    let flg = 0;
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == e) {
        flg = 1;
        continue;
      }
      temp.push(selected[i]);
    }
    if (flg == 0) {
      temp.push(e);
    }
    onSelectedChange(temp);
  };

  return (
    <div className="ui form">
      <div className="field">
        <motion.h3
          onClick={(e) => {
            setopen(!open);
          }}
          whileHover={{
            backgroundColor: "rgb(238, 238, 238)",
            color: "rgb(49, 54, 63)",
          }}
          style={{
            borderColor: "rgb(238, 238, 238)",
          }}
          className=" p-5 text-4xl"
        >
          {label}
        </motion.h3>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: easeInOut,
              }}
              exit={{ opacity: 0 }}
              className=" h-1/4 m-4  round pl-6 max-h-24 overflow-scroll w-full"
            >
              {ops}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropDown;
