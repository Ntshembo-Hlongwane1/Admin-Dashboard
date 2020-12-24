import React from "react";
import { Line } from "react-chartjs-2";
interface Props {}

export const TrafficChart = (props: Props) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Members Online",
        data: [58, 100, 5, 56, 222, 150, 80, 95],
        borderColor: [`RGB(134, 142, 150)`],
        backgroundColor: ["#BDEFF2"],
        pointBackgroundColor: "#FF362E",
        pointBorderColor: "#FF362E",
      },
      {
        label: "Sales Made",
        data: [21, 74, 35, 96, 122, 40, 20, 15],
        borderColor: [`RGB(102, 205, 0)`],
        // backgroundColor: ["RGB(45, 28, 202)"],
        pointBackgroundColor: "#0045BE",
        pointBorderColor: "#0045BE",
        fill: false,
      },
      {
        label: "Gross",
        data: [21, 21, 21, 21, 21, 21, 21, 21],
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
