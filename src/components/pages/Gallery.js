import React from 'react';
import './Gallery.css';
import { Hero } from '../Hero';
import ImageScroll from '../ImageScroll';
import img4 from '../../Images/imgg4.jpg'
import BGimg from "../../Images/BG.png"

function Gallery() {
  return (
    <>
    <img id="imgBG" src={BGimg} alt="Background" />
    <div className="center-gal">
    <Hero MainTextOth="Facilites" MainTextSize="100px" MainTextSizeM="8em" MainTextMarginTop="50px" MainTextMarginTopM="-450px"/>
      <ImageScroll />
      <Hero MainTextOut="Getting" MainTextOth="Started" MainTextSize="100px" MainTextSizeM="5em" MainTextMarginTopM="0px"/>
      <div className="centered-container1">
        <iframe className="video" src="https://www.youtube.com/embed/lDgEBIKQJI8" frameborder="0" allowfullscreen></iframe>
      </div>
      <Hero MainTextOut="Social" MainTextOth="Media" MainTextSize="100px" MainTextSizeM="7em" MainTextMarginTopM="-200px"/>
      <div className="containerV">
        <div className="post">
          <div className="instagram-handle">
            <p style={{ textAlign: 'center', color: 'white' }}>Connect with us</p>
            <i className="fab fa-instagram instagram-icon"></i>
            <a href="https://www.instagram.com/the.queclub/">the.queclub</a>
          </div>
          <img src={img4} alt="Post" className='insPost'/>
          <p>"Old God sure was in a good mood when he made this place”.</p>
          <p className="feed-link">
            <a href="https://www.instagram.com/p/Cm1IW9ypKNP/?img_index=1">Go to Instagram</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Gallery;
