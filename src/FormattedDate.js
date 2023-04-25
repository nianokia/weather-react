import React from "react";
import moment from "moment-timezone";

export default function FormattedDate(props) {
  const timeMapping = {
    "-43200": "Etc/GMT+12",
    "-39600": "Pacific/Niue",
    "-36000": "Pacific/Honolulu",
    "-34200": "Pacific/Marquesas",
    "-32400": "Etc/GMT+9",
    "-28800": "Etc/GMT+8",
    "-25200": "Canada/Yukon",
    "-21600": "Pacific/Galapagos",
    "-18000": "America/Jamaica",
    "-16200": "America/Caracas",
    "-14400": "America/Dominica",
    "-12600": "Canada/Newfoundland",
    "-10800": "America/Buenos_Aires",
    "-7200": "Atlantic/South_Georgia",
    "-3600": "Atlantic/Cape_Verde",
    0: "Iceland",
    3600: "Africa/Lagos",
    7200: "Africa/Cairo",
    10800: "Asia/Baghdad",
    12600: "Iran",
    14400: "Asia/Baku",
    16200: "Asia/Kabul",
    18000: "Asia/Tashkent",
    19800: "Asia/Kolkata",
    20700: "Asia/Kathmandu",
    21600: "Asia/Almaty",
    23400: "Indian/Cocos",
    25200: "Asia/Bangkok",
    28800: "Australia/Perth",
    32400: "Asia/Tokyo",
    34200: "Australia/Adelaide",
    36000: "Australia/Sydney",
    37800: "Australia/Lord_Howe",
    39600: "Pacific/Guadalcanal",
    41400: "Pacific/Norfolk",
    43200: "Pacific/Auckland",
    45900: "Pacific/Chatham",
    46800: "Pacific/Tongatapu",
    50400: "Pacific/Kiritimati",
  };

  let currentTimeZone = moment().tz(timeMapping[props.timezone]);

  return <div>{currentTimeZone.format("dddd h:mm a")}</div>;
}
