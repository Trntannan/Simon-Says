import React from 'react';

const StartButton = ({ onStart }) => {
  return (
    <button className="start-button" onClick={onStart}>
      Start Game
    </button>
  );
};

export default StartButton;
