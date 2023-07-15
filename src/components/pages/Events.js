import React from 'react'
import { Hero } from '../Hero';
import './Events.css'
import EventCard from '../EventCard';
import BGimg from "../../Images/BG.png"

function Events() {
  return (
    <>
      <img id="imgBG" src={BGimg} alt="Background" />
        <Hero MainTextOut="Upcoming" MainTextOth="Events" MainTextSize="100px"/>
        <div className="Containerr">
            <h3 className="year">2023</h3>
            <EventCard/>
            <EventCard/>
            <h3 className="year">2024</h3>
            <EventCard/>
            <EventCard/>
        </div>
        
    </>
  );
}

export default Events