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
    <div className={`countdown text-cyan-200 xxs:max-sm:grid grid-cols-1 gap-4 md:flex justify-center gap-4 flex-row`}>
    <div className="">
      <p className="text-center">{daysLeft}</p>
      <p className="text-center xxs: text-sm md:text-med">Days</p>
    </div>
    <div className="">
      <p className="text-center">{hoursLeft}</p>
      <p className="text-center xxs: text-sm md:text-med">Hours</p>
    </div>
    <div className="">
      <p className="text-center">{minutesLeft}</p>
      <p className="text-center xxs: text-sm md:text-med">Minutes</p>
    </div>
    <div className="">
      <p className="text-center">{secondsLeft}</p>
      <p className="text-center xxs: text-sm md:text-med">Seconds</p>
    </div>
    </div>
  );
};

export default Countdown;
