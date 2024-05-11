import { useEffect, useRef } from "react";

const Songqueue = ({ qsongs }) => {
  useRef();
  let list = [];
  useEffect(() => {
    console.log(qsongs);
    list = qsongs.map((qsong, index) => {
      return (
        <li key={index} className=" border-2 border-gray-300  text-gray-500">
          {qsong}
        </li>
      );
    });
  }, [qsongs]);
  return <ul>{list}</ul>;
};

export default Songqueue;
