import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isMinimized, setIsMinimized] = useState(false); // State for minimizing

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <main className={isMinimized ? "minimized" : ""}> {/* Add class based on minimized state */}
      <h1>Pomodoro Timer</h1>
      <button onClick={toggleMinimize}>
        {isMinimized ? "Expand" : "Minimize"}
      </button>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
