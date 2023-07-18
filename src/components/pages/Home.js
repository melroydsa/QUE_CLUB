import React from 'react'
import "./Home.css"
import { Hero } from '../Hero';
import vid from '../../Videos/Vid.mp4'

function Home() {
  return (
    <>
        <video id="video-bg" autoPlay muted loop>
            <source src={vid} type="video/mp4" />
        </video>
        <div className='center-container'>
          <Hero MainTextOut="Queue" MainTextOth="Club" MainTextSizeM="9em" SubText="Escape to a World of Refined Leisure: Discover the Perfect Shot at the Queue Club" MainTextSize="12.5em" MainTextMarginTop="0.4em" SubTextMarginTop="6em"/>
          <div className='parent'>
          <button className="BeAMem">Become a Member</button>
          </div>
        </div>
    </>
  )
}

export default Home;