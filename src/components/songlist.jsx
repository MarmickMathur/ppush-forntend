import { useState, useEffect } from "react";
import axios from "axios";
import Listitem from "./listcomp";

const Songlist = ({ tags, term, qsongs, onsongchange }) => {
  const [songs, setsongs] = useState([]);

  const searchterm = async () => {
    if (term != "") {
      const { data } = await axios.post(
        `https://ppushermusicsuggestion.onrender.com/recommend`,
        {
          music_title: term,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      data.recommendations.push(term);
      data.recommendations.reverse();
      data.recommendations.splice(Math.min(data.recommendations.length, 10));
      setsongs(data.recommendations);
    }
  };

  const searchtags = async () => {
    if (tags.length != 0) {
      let temp = [];
      for (let i = 0; i < tags.length; i++) {
        const { data } = await axios.get(
          `https://ppushermusicsuggestion.onrender.com/autocomplete?query=${tags[i]}`
        );
        console.log(data);

        if (data.length != 0) {
          const res = await axios.post(
            `https://ppushermusicsuggestion.onrender.com/recommend`,
            {
              music_title: data[0],
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          res.recommendations.forEach((song) => {
            temp.push(song);
          });
        }

        //   console.log(res);
        // temp.concat(res);
      }
      // console.log("temp is", temp);
      setsongs(temp);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (term != "") {
        searchterm();
        // search(tags[0]);
      }
    }, 500);

    return /*this is returned as a clean up function*/ () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tags.length != 0) {
        searchtags();
        // search(tags[0]);
      }
    }, 500);

    return /*this is returned as a clean up function*/ () => {
      clearTimeout(timeoutId);
    };
  }, [tags]);

  console.log(songs);
  const songlist = songs.map((song, index) => {
    return (
      <Listitem
        action1={onsongchange}
        qsongs={qsongs}
        key={index}
        song={song}
      />
    );
  });
  console.log("songlist -> listComp" , qsongs)

  return (
    <>
      <div className="list h-full">
        <ul className=" font-medium text-gray-900  dark:text-white">
          {songlist}
        </ul>
      </div>
    </>
  );
};

export default Songlist;
