import React from 'react'
import "./Membership.css"
import { Hero } from '../Hero';
import {MemberCard} from '../MemberCard';
function Membership() {
  return (
    <>
       <Hero MainTextOut="Membership" MainTextSize="110px" MainTextMarginTop="35px" SubTextMarginTop="135px" MainTextOth="Plans" SubText="Choose a plan that works best for you" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MemberCard Tier="Bronze Tier" Price="300/-" Color="brown" PositionL="15%" PositionT="0%" />
        <MemberCard Tier="Gold" Price="700/-" Benefits="Access to exclusive features" Color="gold" PositionL="11%" PositionT="0%"/>
        <MemberCard Tier="Silver Tier" Price="500/-" Color="silver" PositionL="8%" PositionT="0%" />
      </div>
    </>
  )
}

export default Membership;