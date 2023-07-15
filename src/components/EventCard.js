import React from 'react'
import "./EventCard.css"

function EventCard() {
  return (
    <>
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">3 </div>        
              <div className="month">January</div>
              
            </div>
          </div>
          <div className="event-right">
            <h3 className="event-title">Tournaments</h3>
            <div className="event-description">BETVICTOR CHAMPIONSHIP  SNOOKER tournamENT</div>
            <div className="event-timing">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRno76XidvOwswSMZyPb_mIKRbxA65O4BCMUy-z4LAQoBmSBu-oqDkIQWB12sEnIwyS4k&usqp=CAU" alt=""/>10:00 am
            </div>

          </div>
        </div>
    </>
  )
}
export default EventCard;