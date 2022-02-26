import React, { useEffect, useState } from "react";

export const Time = ({gameOver , sendTime}) => {
  const [Time, SetTime] = useState(0);
  const [sTime, setSTime] = useState(0);

  useEffect(() => {
    if (Time > 0 && gameOver) {
      setSTime(Time);
      SetTime(0);
    }
  });
  useEffect(() => {
    const incrementTime = () => {
      let newTime = Time + 1;
      SetTime(newTime);
    };
     const timeInterValid = setTimeout(() => {
      incrementTime();
    }, 1000);
    if (gameOver) {
        clearInterval(timeInterValid);
    }
  }, [Time, SetTime, gameOver, sendTime]);
  return <div style={{ fontSize : '24px' , color : 'white' , marginTop : '22px'
  }}>{gameOver ? sTime : Time}</div>;
};
