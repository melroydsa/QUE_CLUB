import React from 'react';
import "./VideoCard.css"
import ThumbNail from "../Images/thumbnail.jpg"

function VideoCard() {
  return (
    <>
        <div className="VideoCard">
          <img className="Thumbnail" src={ThumbNail} alt="THUMBNAILLLLLLLLLLLL" />
          <div className="VideoInfo">
            <h1 className="VideoTitle">Video Title</h1>
            <p className="VideoDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <button className="VideoLink">Click to watch video</button>
          </div>
        </div>
        <div class="line"></div>
    </>
  );
}

export default VideoCard;
