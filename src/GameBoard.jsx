import React, { useState, useEffect } from 'react';
import './index.css';
import App from './App';
import Modal from './Modal'; 

const GameBoard = ({ level, onLevelComplete, isActive }) => {
  const [sequence, setSequence] = useState([]);// Initialize sequence to an empty array
  const [userSequence, setUserSequence] = useState([]);// Initialize userSequence to an empty array
  const [isUserTurn, setIsUserTurn] = useState(false);//  Initialize isUserTurn to false
  const [isGameOver, setIsGameOver] = useState(false);  // Initialize isGameOver to false

  useEffect(() => {
    if (isActive) startNewLevel();
  }, [level, isActive]);

  const startNewLevel = () => {
    const newSequence = generateSequence(level);
    setSequence(newSequence);
    setUserSequence([]);
    playSequence(newSequence);
  };

  const generateSequence = (level) => {
    const sequence = [];
    for (let i = 0; i < level; i++) {
      sequence.push(Math.floor(Math.random() * 9));
    }
    return sequence;
  };

  const playSequence = (sequence) => {
    sequence.forEach((square, index) => {
      setTimeout(() => {
        highlightSquare(square);
      }, (index + 1) * 1000);
    });
    setTimeout(() => {
      setIsUserTurn(true);
    }, (sequence.length + 1) * 1000);
  };

  const highlightSquare = (squareIndex) => {
    const square = document.getElementById(`square-${squareIndex}`);
    square.classList.add('highlight');
    setTimeout(() => {
      square.classList.remove('highlight');
    }, 500);
  };

  const handleSquareClick = (index) => {
    if (!isUserTurn) return;
    setUserSequence([...userSequence, index]);

    if (sequence[userSequence.length] === index) {
      if (userSequence.length + 1 === sequence.length) {
        setIsUserTurn(false);
        setTimeout(onLevelComplete, 1000);
      }
    } else {
      setIsGameOver(true); // Trigger game over
    }
  };

  const handleRestart = () => {
    setIsGameOver(false);
    setIsUserTurn(false);
    setSequence([]);
    onLevelComplete(); // Reset the game to start from level 1
  };

  return (
    <>
      {isGameOver && (
        <Modal message="Game Over! Try Again." onClose={handleRestart} />
      )}
      <div className={`game-board ${isGameOver ? 'faded' : ''}`}>
        <h2>Level: {level}</h2>
        <div className="grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              id={`square-${index}`}
              className="square"
              onClick={() => handleSquareClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameBoard;