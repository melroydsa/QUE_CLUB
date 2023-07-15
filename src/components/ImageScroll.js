import React, { useState } from 'react';
import './ImageScroll.css';
import img1 from "../Images/img2.jpg"
import img2 from "../Images/img3.jpg"
import img3 from "../Images/img4.jpg"
import img4 from "../Images/img5.jpg"
import img5 from "../Images/img6.jpg"
import img6 from "../Images/img7.jpg"
import img7 from "../Images/imgg2.jpg"
import img8 from "../Images/imgg4.jpg"

const images = [
  img1,
  img2,
  img3,
  img4,img5,img6,img7,img8
]; // Add the paths of your images here

function ImageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="centered-container">
        <div className="carousel-box">
          <div className="carousel-container">
            <img className="carousel-image" src={images[currentIndex]} alt="Carousel Image" />
            <button className="carousel-button left" onClick={previousImage}>&larr;</button>
            <button className="carousel-button right" onClick={nextImage}>&rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageScroll;
