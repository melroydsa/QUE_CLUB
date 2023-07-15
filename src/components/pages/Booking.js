import React,{useState,useEffect} from 'react';
import "./Booking.css";
import { Hero } from '../Hero';

function Booking() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButtonT, setSelectedButtonT] = useState(null);
    const [selectedButtonTi, setSelectedButtonTi] = useState(null);
    const handleButtonClick = (buttonId) => {
        const currentButton = document.getElementById(buttonId);
        if (selectedButton === buttonId) {
          currentButton.style.backgroundColor = "transparent";
          currentButton.style.color = "white";
          setSelectedButton(null);
        } else {
          if (selectedButton) {
            const previousButton = document.getElementById(selectedButton);
            previousButton.style.backgroundColor = "transparent";
            previousButton.style.color = "white";
          }
      
          currentButton.style.backgroundColor = "#30D5C8";
          currentButton.style.color = "black";
          setSelectedButton(buttonId);
        }
      };
      const handleButtonClickT = (buttonId) => {
        if (selectedButtonT) {
          const previousButton = document.getElementById(selectedButtonT);
          previousButton.style.backgroundColor = "transparent"; // Set to default color
          previousButton.style.color = "white"; // Set to default color // Set to default text shadow
        }
    
        const currentButton = document.getElementById(buttonId);
        currentButton.style.backgroundColor = "#30D5C8";
        currentButton.style.color = "black";
        currentButton.style.textShadow = "1px 1px 2px black";
    
        setSelectedButtonT(buttonId);
      };
      const handleButtonClickTi = (buttonId) => {
        if (selectedButtonTi) {
          const previousButton = document.getElementById(selectedButtonTi);
          previousButton.style.backgroundColor = "transparent"; // Set to default color
          previousButton.style.color = "white"; // Set to default color // Set to default text shadow
        }
    
        const currentButton = document.getElementById(buttonId);
        currentButton.style.backgroundColor = "#30D5C8";
        currentButton.style.color = "black";
        currentButton.style.textShadow = "1px 1px 2px black";
    
        setSelectedButtonTi(buttonId);
      };

  const renderCalendarCells = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const calendarCells = [];

    for (let i = 0; i < 7; i++) {
      const date = currentDate.getDate() + i;
      const dayIndex = (i + currentDay) % 7;
      const dayName = getDayName(dayIndex);

      if (date <= daysInMonth(currentMonth, currentYear)) {
        calendarCells.push(
          <td key={i}>
            <button id={i} onClick={() => handleButtonClick(i)}>{date}</button>
          </td>
        );
      }
    }

    return calendarCells;
  };

  const getDayName = (dayIndex) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  return (
    <>
     <Hero MainTextOut="Book a" MainTextOth="Session" MainTextSize="100px" MainTextMarginTop="20px" />
      <table className="Calendar">
        <tbody>
          <tr>
            {renderCalendarCells()}
          </tr>
        </tbody>
      </table>
      <table className="Tables">
        <tbody>
          <tr>
            <td><input type='button' onClick={() => handleButtonClickT('1T')} id="1T" value='Table 1' /></td>
            <td><input type='button' onClick={() => handleButtonClickT('2T')} id="2T" value='Table 2' /></td>
            <td><input type='button' onClick={() => handleButtonClickT('3T')} id="3T" value='Table 3' /></td>
            <td><input type='button' onClick={() => handleButtonClickT('4T')} id="4T" value='Table 4' /></td>
          </tr>
        </tbody>
      </table>
      <table className="TimeSlot">
        <tbody>
          <tr>
            <td><input type='button' onClick={() => handleButtonClickTi('4B')} id="4B" value='16:00' /></td>
            <td><input id="8B" onClick={() => handleButtonClickTi('8B')} type='button' value='20:00' /></td>
          </tr>
          <tr>
            <td><input type='button' onClick={() => handleButtonClickTi('5B')} id="5B" value='17:00' /></td>
            <td><input id="9B" onClick={() => handleButtonClickTi('9B')} type='button' value='21:00' /></td>
          </tr>
          <tr>
            <td><input type='button' onClick={() => handleButtonClickTi('6B')} id="6B" value='18:00' /></td>
            <td><input id="10B" onClick={() => handleButtonClickTi('10B')} type='button' value='22:00' /></td>
          </tr>
          <tr>
            <td><input type='button' onClick={() => handleButtonClickTi('7B')} id="7B" value='19:00' /></td>
            <td><input id="11B" onClick={() => handleButtonClickTi('11B')} type='button' value='23:00' /></td>
          </tr>
        </tbody>
      </table>
      <button className="ConfirmBook">Book!</button>
    </>
  );
}

export default Booking;
