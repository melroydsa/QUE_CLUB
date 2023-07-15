import React from "react";
import { Hero } from "../Hero";
import VideoCard from '../VideoCard';
import "./Resources.css"
import BGimg from "../../Images/BG.png"

function Resouces() {
  return (
    <>
      <img id="imgBG" src={BGimg} alt="Background" />
      <Hero
        MainTextOut="Resources"
        MainTextSize="120px"
        MainTextMarginTop="50px"
        SubText="Dive Into Our World of Billiards: Explore Our Premier Pool and Snooker Facilities"
        SubTextMarginTop="150px"
      />
      <div className="Container">
        <VideoCard />
        <VideoCard/>
      </div>
    </>
  );
}

export default Resouces;
