import { DurationObject, TimeObject } from "../types";

/**
 * Returns the current time in HH:MM:SS format or as an object.
 *
 * @param {boolean} [returnAsObject=false] - If true, returns the time as an object.
 * @returns {string|TimeObject} The current time as a string in HH:MM:SS format or as an object with properties `localTime`, `hours`, `minutes`, `seconds`, `milliseconds`, and `sinceEpoch`.
 */

export function getCurrentTime(returnAsObject = false): string | TimeObject {
  const getCurrentTimeInit = new Date();
  const localTime = getCurrentTimeInit.toLocaleTimeString();
  let hours = getCurrentTimeInit.getHours();
  const minutes = getCurrentTimeInit.getMinutes();
  const seconds = getCurrentTimeInit.getSeconds();
  const milliseconds = getCurrentTimeInit.getMilliseconds();
  const sinceEpoch = getCurrentTimeInit.getTime();
  const meridiem = getCurrentTimeInit.getHours() >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;

  const hoursString = hours.toString().padStart(2, "0");
  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");

  if (!returnAsObject) {
    return `${hoursString}:${minutesString}:${secondsString} ${meridiem}`;
  } else {
    return {
      localTime,
      hours: hoursString,
      minutes: minutesString,
      seconds: secondsString,
      milliseconds: milliseconds.toString(),
      sinceEpoch,
    };
  }
}

/**
 * Sets a new time based on the provided time string.
 * If no time string is provided, defaults to "2020-12-31T23:59:59".
 *
 * @param {string} [timeString] - The time string to set the new time. Defaults to "2020-12-31T23:59:59" if not provided.
 * @returns {number} The time in milliseconds since the Unix Epoch.
 */
export function getFutureTime(timeString: string): number {
  if (!timeString) {
    timeString = "October 6, 2024 00:00:00";
  }
  const userDate = new Date(timeString);
  return userDate.getTime();
}

/**
 * Calculates the duration between the current time and a specified future time.
 *
 * This function retrieves the current time and a future time, then calculates
 * the difference between them in milliseconds.
 *
 * @returns {number} The duration in milliseconds between the current time and the future time.
 *
 * @throws {Error} If the current time result is not of type `TimeObject`.
 */
export function calculateDuration(endTime: string): DurationObject {
  const currentTimeResult = getCurrentTime(true);
  let currentTime: TimeObject;
  let timeToStopFormatted: string;

  if (typeof currentTimeResult !== "string") {
    currentTime = currentTimeResult;
  } else {
    throw new Error(
      "In order for this to work, request a time object instead of a string"
    );
  }

  const futureTime = getFutureTime(endTime);
  const timeToStop = futureTime - currentTime.sinceEpoch;

  const days = Math.floor(timeToStop / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeToStop % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeToStop % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeToStop % (1000 * 60)) / 1000);

  timeToStopFormatted = `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds: timeToStop,
    timeToStopFormatted,
    timeToStop,
  };
}
