import React from 'react';
import "./MemberCard.css";

export const MemberCard = ({ Tier, Price, Benefits, Color, PositionL,PositionT,Transform }) => {
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = Color;
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = 'transparent';
  };

  return (
    <div className="Card" >
      <h1 style={{ color: Color }}>{Tier}</h1>
      <div className="line"></div>
      <h2>{Price}</h2>   
      <button
        className="Select"
        style={{ borderColor: Color}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Select Tier
      </button>
    </div>
  );
};