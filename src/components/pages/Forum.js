import React from 'react'
import ForumCard from '../ForumCard';
import {Hero} from '../Hero'
import './Forum.css'
import BGimg from "../../Images/BG.png"
function Forum() {
  return (
    <>
      <img id="imgBG" src={BGimg} alt="Background" />
        <Hero MainTextOut="Forum" MainTextSize="100px" MainTextSizeM="7em" MainTextMarginTop="60px" MainTextMarginTopM="-450px"/>
        <div className="ContainerForum">
            <ForumCard Title="What is the significance of ball 8" Author="Pragati" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
            <ForumCard Title="Pool tips and tricks" Author="Melroy" Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
        </div>
    </>
  );
}

export default Forum;