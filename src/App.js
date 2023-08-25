import { useState } from 'react';
import './App.css';

function App() {
  const timeid = document.getElementById("time")
  let myInterval = setInterval(myTime, 1000)
  const [time, setTime] = useState("12:00:00 AM");
  const [date, setDate] = useState("01/01/2001")
  const [day, setDay] = useState("Sunday")
  const days = {
    0:'Sunday',
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday'
  }
  function myTime() {
    let d = new Date()
    setTime(d.toLocaleTimeString())
    setDate(d.toLocaleDateString())
    setDay(d.getDay())
  }
  return (
    <div className="App">
      <h2 id="date">{date}</h2>
      <h2 id="time">{time}</h2>
      <h2 id="day">{days[day]}</h2>
    </div>
  );
}

export default App;
