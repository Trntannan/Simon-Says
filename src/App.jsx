import React, { useState } from "react";
import GameBoard from "./GameBoard";
import StartButton from "./StartButton";
import "./index.css";

function App() {
  const [level, setLevel] = useState(1);
  const [isGameActive, setIsGameActive] = useState(false);

  const handleStartGame = () => {
    setIsGameActive(true);
    setLevel(1);
  };

  const handleLevelComplete = () => {
    if (level < 10) {
      setLevel(level + 1);
    } else {
      alert("Congratulations! You completed all levels!");
      setIsGameActive(false);
    }
  };

  return (
    <div className="App">
      {!isGameActive && <StartButton onStart={handleStartGame} />}
      <GameBoard
        level={level}
        onLevelComplete={handleLevelComplete}
        isActive={isGameActive}
      />
    </div>
  );
}

export default App;
