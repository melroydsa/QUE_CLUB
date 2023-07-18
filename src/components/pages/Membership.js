import React from 'react'
import "./Membership.css"
import { Hero } from '../Hero';
import {MemberCard} from '../MemberCard';
import BGimg from "../../Images/BG.png"
function Membership() {
  return (
    <>
    <img id="imgBG" src={BGimg} alt="Background" />
       <Hero MainTextOut="Membership" MainTextSize="7em" MainTextSizeM="5em" MainTextMarginTop="0.4em" MainTextMarginTopM="-5.5em" SubTextMarginTop="3.6em" SubTextMarginTopM="-11.5em" MainTextOth="Plans" SubText="Choose a plan that works best for you" />
      <div className="Card-centered-container">
        <MemberCard Tier="Bronze Tier" Price="300/-" Color="brown"  />
        <div className='Gap'/>
        <MemberCard Tier="Gold" Price="700/-" Benefits="Access to exclusive features" Color="gold"/>
        <div className='Gap'/>
        <MemberCard Tier="Silver Tier" Price="500/-" Color="silver" />
      </div>
    </>
  )
}

export default Membership;