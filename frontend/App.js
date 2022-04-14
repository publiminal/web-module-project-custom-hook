import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import useCoinGecko from "./hooks/useCoinGecko";


import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const [coinGecko, setCoinGecko] = useCoinGecko([]);
  // const [darkMode, setDarkMode] = useState(false); use default local state
  const [darkMode, setDarkMode, handleChanges] =  useDarkMode('darkMode', false); // use persistent state with Local storage.

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} handleChanges={handleChanges} />
     <Charts coinData={coinGecko} />
    </div>
  );
};

export default App;
