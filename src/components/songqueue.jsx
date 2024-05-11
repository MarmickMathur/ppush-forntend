import { Form } from "react-router-dom";

import { songContext } from "../context/song";
import { useContext } from "react";
const SongQueue = ({ songs }) => {
  const { songList, setSongList } = useContext(songContext);
  return (
    <ul>
      {songList && songList.map((song, index) => <li key={index}>song</li>)}
    </ul>
  );
};

export default SongQueue;
