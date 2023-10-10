import React from "react";
import moment from "moment";

export default function RelativeTime({ date }: { date: number }) {
  const relativeTime = moment(date).fromNow();

  return <>{relativeTime}</>;
}
