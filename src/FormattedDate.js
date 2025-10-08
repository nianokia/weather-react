import React from "react";
import moment from "moment-timezone";

export default function FormattedDate(props) {
  let currentTime = moment(props.timezone * 1000);
  console.log(`currentTime: ${currentTime}`)

  return <div>{currentTime.format("dddd h:mm a")}</div>;
}