import React from 'react';
import '../App.css';

function Chip({ label, className=''}) {
  return (
    <div className={`chip ${className}`}>
      <span className="chip-label">{label}</span>
    </div>
  );
}

export default Chip;
