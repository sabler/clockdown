import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { calculateDuration } from "../modules/countdown";
import { StartingTime } from "../types";
import Stars from "./Stars";

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
    <div>
      <Stars />

      <div className="countdown text-cyan-200 xxs:max-sm:grid grid-cols-1 gap-4 md:flex justify-center gap-4 flex-row">
        <div>
          <p className="leading-3 text-center">{daysLeft}</p>
          <p className="leading-3 text-center xxs: text-sm md:text-sm">Days</p>
        </div>
        <div>
          <p className="leading-3 text-center">{hoursLeft}</p>
          <p className="leading-3 text-center xxs: text-sm md:text-sm">Hours</p>
        </div>
        <div>
          <p className="leading-3 text-center">{minutesLeft}</p>
          <p className="leading-3 text-center xxs: text-sm md:text-sm">Minutes</p>
        </div>
        <div>
          <p className="leading-3 text-center">{secondsLeft}</p>
          <p className="leading-3 text-center xxs: text-sm md:text-sm">Seconds</p>
        </div>
      </div>
      <Stars />
    </div>
  );
};

export default Countdown;
