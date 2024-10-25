export interface TimeObject {
  localTime: string;
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
  sinceEpoch: number;
}

export interface DurationObject {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  timeToStopFormatted: string;
  timeToStop: number;
}


export interface StartingTime {
  startAt: string;
}

export interface HeadlineProps {
  copy: string;
  highlight?: boolean;
}