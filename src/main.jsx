import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {SongProvider} from "./context/song"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <SongProvider>
      <App />
    </SongProvider>
    </BrowserRouter>
  </React.StrictMode>
);
