import React, { useState } from 'react';
import GameBoard from './GameBoard';
import StartButton from './StartButton';
import './index.css';

function App() {
  const [level, setLevel] = useState(1);
  const [isGameActive, setIsGameActive] = useState(false);

  const handleStartGame = () => {
    setIsGameActive(true);
    setLevel(1); // Reset level to 1 when starting a new game
  };

  const handleLevelComplete = () => {
    if (level < 10) {
      setLevel(level + 1);
    } else {
      alert('Congratulations! You completed all levels!');
      setIsGameActive(false); // End the game after level 10
    }
  };

  const handleGameOver = () => {
    setIsGameActive(false);
    setLevel(1);
  };

  return (
    <div className="App">
      {!isGameActive && <StartButton onStart={handleStartGame} />}
      <GameBoard
        level={level}
        onLevelComplete={handleLevelComplete}
        isActive={isGameActive}
        onGameOver={handleGameOver} // Handle game reset
      />
    </div>
  );
}

export default App;