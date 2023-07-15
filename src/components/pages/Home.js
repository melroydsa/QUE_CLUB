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
        <Hero MainTextOut="Queue" MainTextOth="Club" SubText="Escape to a World of Refined Leisure: Discover the Perfect Shot at the Queue Club" MainTextSize="200px" MainTextMarginTop="150px" SubTextMarginTop="320px"/>
        <div className='parent'>
        <button className="BeAMem">Become a Member</button>
        </div>
    </>
  )
}

export default Home;