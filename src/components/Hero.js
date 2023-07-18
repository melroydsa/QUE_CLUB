import React, { useEffect, useState } from 'react';
import './Hero.css';

export const Hero = ({
  MainTextOut,
  MainTextOth,
  SubText,
  MainTextSize,
  MainTextSizeM,
  MainTextMarginTop,
  MainTextMarginTopM,
  SubTextMarginTop,
  SubTextMarginTopM,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 550);
  };

  useEffect(() => {
    checkIfMobile();

    const handleResize = () => {
      checkIfMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className="Hero" style={{backgroundColor: 'transparent'}}>
      <h1 className="HeroT" style={{fontSize: isMobile ? MainTextSizeM : MainTextSize, marginTop: isMobile? MainTextMarginTopM:MainTextMarginTop}}>
        <span className="Outline">{MainTextOut}</span>
        {MainTextOth}
      </h1>
      <div className="HeroP">
        <p style={{ marginTop: isMobile? SubTextMarginTopM: SubTextMarginTop }}>{SubText}</p>
      </div>
    </div>
  );
};
