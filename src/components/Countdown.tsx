import * as styles from "../css/modules/countdown.module.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { calculateDuration } from "../modules/countdown";
import { StartingTime } from "../types";

const Countdown = ({ startAt }: StartingTime) => {
  const [timeLeft, setTimeLeft] = useState("--:--:--");
  const [daysLeft, setDaysLeft] = useState("--");
  const [hoursLeft, setHoursLeft] = useState("--");
  const [minutesLeft, setMinutesLeft] = useState("--");
  const [secondsLeft, setSecondsLeft] = useState("--");
  const [millisecondsLeft, setMillisecondsLeft] = useState("--");

  useEffect(() => {
    const endTime = calculateDuration(`${startAt}`);
    let intervalId: NodeJS.Timeout;

    if (endTime.timeToStop > 0) {

      intervalId = setInterval(() => {
      
        setTimeLeft(endTime.timeToStopFormatted);
        setDaysLeft(endTime.days.toString().padStart(2, "0"));
        setHoursLeft(endTime.hours.toString().padStart(2, "0"));
        setMinutesLeft(endTime.minutes.toString().padStart(2, "0"));
        setSecondsLeft(endTime.seconds.toString().padStart(2, "0"));
        setMillisecondsLeft(endTime.milliseconds.toString().padStart(3, "0"));

        if (endTime.timeToStop <= 0) {
          clearInterval(intervalId);
        }
      }, 1000);
  
    }
    return () => clearInterval(intervalId);
  
  }, [timeLeft]);

  return (
    <div className={`${styles.countdown}`}>
      <div>
        <p>{daysLeft}</p>
        <p>Days</p>
      </div>
      <div>
        <p>{hoursLeft}</p>
        <p>Hours</p>
      </div>
      <div>
        <p>{minutesLeft}</p>
        <p>Minutes</p>
      </div>
      <div>
        <p>{secondsLeft}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
