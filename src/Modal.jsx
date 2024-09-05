import React from 'react';
import './index.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button className="modal-button" onClick={onClose}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Modal;