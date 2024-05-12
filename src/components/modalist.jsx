import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./auth/login";

const Modalist = ({ song }) => {
  const [playlist, setplaylist] = useState([]);
  const [opts, setopts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const getres = async () => {
    const { data } = await axios.get(
      "https://ppusherfinalbackend.onrender.com/playlist"
    );
    console.log(data.publicPlaylists);

    const temp = [];
    let ind = 0;
    while (temp.length <= 10 && ind < data.publicPlaylists.length) {
      temp.push(data.publicPlaylists[ind]);
      ind++;
    }
    console.log("temp is", temp);
    setplaylist(temp);
  };

  const addres = async () => {
    const data = localStorage.getItem("tokens");
    console.log(data);
    const newdata = await JSON.parse(data);
    console.log(newdata);
    if (!newdata) {
      alert("pls login");
      return;
    }
    const { accessToken, refreshToken } = newdata;
    console;
    const res = await axios.post(
      "https://ppusherfinalbackend.onrender.com/user/playlist",
      {
        name: inputValue,
        song: song,
        public: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
      }
    ); //using input value
    console.log(res);
  };

  useEffect(() => {
    getres();
  }, []);

  useEffect(() => {
    let temp = playlist;
    setopts(temp);
  }, [playlist]);

  const addnewplaylist = async () => {
    await addres();
    await getres();
  };

  const Listitems = opts.map((op, index) => {
    return (
      <li key={index}>
        <div className="w-11/12">{op.name}</div>
        <div className="w-1/12">+</div>
      </li>
    );
  });

  return (
    <>
      <div className="list">
        <ul className="font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {Listitems}
          <li className="border-b border-gray-200 dark:border-gray-600 py-2 px-4">
            <div className="w-11/12">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter text here"
                className="w-full px-3 py-2 placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
          </li>
        </ul>
        <button
          onClick={addnewplaylist}
          className="block mt-4 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Playlist
        </button>
      </div>
    </>
  );
};

export default Modalist;
