import React from 'react';

const Button = ({ title = '', onClick = () => {}, className = '', disabled = false }) => {
  return (
    <button
      className={`button ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
