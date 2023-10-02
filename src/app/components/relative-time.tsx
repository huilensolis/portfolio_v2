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

      if (seconds < 60) {
        setRelativeTime(`${seconds} second${seconds !== 1 ? "s" : ""} ago`);
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        setRelativeTime(`${minutes} minute${minutes !== 1 ? "s" : ""} ago`);
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        setRelativeTime(`${hours} hour${hours !== 1 ? "s" : ""} ago`);
      } else {
        const days = Math.floor(seconds / 86400);
        setRelativeTime(`${days} day${days !== 1 ? "s" : ""} ago`);
      }
    };

    calculateRelativeTime();
  }, [date]);

  return <>{relativeTime}</>;
}
