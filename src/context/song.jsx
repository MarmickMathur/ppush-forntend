import { createContext, useState } from "react";

export const songContext = createContext({
    songList : [],
    setSongList : () => [] 
});

export const SongProvider = ({children}) => {
    const [songList , setSongList] = useState(null);
    const value =  {songList , setSongList};

    return <songContext.Provider value={value}>{children}</songContext.Provider>
}