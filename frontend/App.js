import React, { useState, useEffect } from "react";
import axios from "axios";

import useCoinGecko from "./hooks/useCoinGecko";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const [coinGecko, setCoinGecko] = useCoinGecko([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
     <Charts coinData={coinGecko} />
    </div>
  );
};

export default App;
