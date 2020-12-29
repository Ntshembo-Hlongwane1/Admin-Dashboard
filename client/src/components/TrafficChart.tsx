import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Pusher from "pusher-js";
import axios from "axios";

export const TrafficChart = () => {
  const date = new Date();
  const data = {
    labels: [
      "Jan 2020",
      "Feb 2020",
      "Mar 2020",
      "Apr 2020",
      "May 2020",
      "Jun 2020",
      "Jul 2020",
      "Aug 2020",
      "Sep 2020",
      "Oct 2020",
      "Nov 2020",
      "Dec 2020",
      "Jan 2021",
      "Feb 2021",
      "Mar 2021",
      "Apr 2021",
      "May 2021",
      "Jun 2021",
      "Jul 2021",
      "Aug 2021",
      "Sep 2021",
      "Oct 2021",
      "Nov 2021",
      "Dec 2021",
      "Jan 2022",
      "Feb 2022",
      "Mar 2022",
      "Apr 2022",
      "May 2022",
      "Jun 2022",
      "Jul 2022",
      "Aug 2022",
      "Sep 2022",
      "Oct 2022",
      "Nov 2022",
      "Dec 2022",
    ],
    datasets: [
      {
        label: `Monthly Net Income In The Year ${date.getFullYear()}`,
        data: [33, 29, 16, 33, 11, 15, 15, 15, 32, 25, 50, 50, 30],
        borderColor: [`RGB(134, 142, 150)`],
        backgroundColor: ["#BDEFF2"],
        pointBackgroundColor: "#FF362E",
        pointBorderColor: "#FF362E",
      },
      {
        label: `Sales Made In The Year ${date.getFullYear()}`,
        data: [23, 19, 6, 23, 1, 5, 5, 5, 22, 30, 40, 40, 30, 33],
        borderColor: [`RGB(102, 205, 0)`],
        // backgroundColor: ["RGB(45, 28, 202)"],
        pointBackgroundColor: "#0045BE",
        pointBorderColor: "#0045BE",
        fill: false,
      },
      {
        label: `Gross Income In The Year ${date.getFullYear()}`,
        data: [
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          21,
          25,
          21,
          21,
          30,
        ],
        borderDash: [10, 5],
        borderColor: [`#FF362E`],
        pointBackgroundColor: "#0045BE",
        pointBorderColor: "#0045BE",
        fill: false,
      },
    ],
  };
  const options = {
    legend: false,
    scales: {
      xAxes: [
        {
          display: true,
        },
      ],
      yAxes: [
        {
          display: true,
        },
      ],
    },
  };
  return (
    <div className="TrafficChart">
      <Line data={data} options={options} />
    </div>
  );
};
