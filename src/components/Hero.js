import React from 'react'
import "./Hero.css"

export const Hero = (
    {
        MainTextOut,
        MainTextOth,
        SubText,
        MainTextSize,
        MainTextMarginTop,
        SubTextMarginTop
    }
)=>
{
    return(
    <div className="Hero">
        <h1 className="HeroT" style={{ fontSize: MainTextSize,marginTop: MainTextMarginTop }}>
        <span className="Outline">{MainTextOut}</span>{MainTextOth}
        </h1>
        <div className="HeroP" >
            <p style={{ marginTop: SubTextMarginTop }}>{SubText}</p>
        </div>
    </div>
    );
};