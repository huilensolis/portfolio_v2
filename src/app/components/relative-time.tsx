"use client";

import React, { useEffect, useState } from "react";

export default function RelativeTime({ date }: { date: number }) {
  const [relativeTime, setRelativeTime] = useState<string>("");

  useEffect(() => {
    const calculateRelativeTime = () => {
      const currentDate = new Date();
      const providedDate = new Date(date);

      const timeDifference = currentDate.getTime() - providedDate.getTime();
      const seconds = Math.floor(timeDifference / 1000);

      const minute = 60;
      const hour = minute * 60;
      const day = hour * 24;
      const year = day * 365;

      if (seconds < 0) {
        setRelativeTime("In the future");
      } else if (seconds < minute) {
        setRelativeTime(`${seconds} second${seconds !== 1 ? "s" : ""} ago`);
      } else if (seconds < hour) {
        const minutes = Math.floor(seconds / minute);
        setRelativeTime(`${minutes} minute${minutes !== 1 ? "s" : ""} ago`);
      } else if (seconds < day) {
        const hours = Math.floor(seconds / hour);
        setRelativeTime(`${hours} hour${hours !== 1 ? "s" : ""} ago`);
      } else if (seconds < year) {
        const days = Math.floor(seconds / day);
        setRelativeTime(`${days} day${days !== 1 ? "s" : ""} ago`);
      } else {
        const years = Math.floor(seconds / year);
        const days = Math.floor((seconds - year) / day);
        setRelativeTime(
          `${years} year${years !== 1 ? "s" : ""} and ${days} day${
            days !== 1 ? "s" : ""
          } ago`
        );
      }
    };

    calculateRelativeTime();
  }, [date]);

  return <>{relativeTime}</>;
}
