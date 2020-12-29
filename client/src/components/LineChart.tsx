import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../Styles/Chart.css";

interface Props {
  data: Array<string>;
}
const LineChart = (props: Props) => {
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
      "Jan 2021 ",
      "Feb 2021 ",
      "Mar 2021 ",
      "Apr 2021 ",
      "May 2021 ",
      "Jun 2021 ",
      "Jul 2021 ",
      "Aug 2021 ",
      "Sep 2021 ",
      "Oct 2021 ",
      "Nov 2021 ",
      "Dec 2021 ",
      "Jan 2022 ",
      "Feb 2022 ",
      "Mar 2022 ",
      "Apr 2022 ",
      "May 2022 ",
      "Jun 2022 ",
      "Jul 2022 ",
      "Aug 2022 ",
      "Sep 2022 ",
      "Oct 2022 ",
      "Nov 2022 ",
      "Dec 2022 ",
    ],
    datasets: [
      {
        label: "Members Online",
        data: props.data,
        borderColor: [`RGB(134, 142, 150)`],
        // backgroundColor: ["RGB(45, 28, 202)"],
        pointBackgroundColor: "RGB(255, 37, 0)",
        pointBorderColor: "RGB(255, 37, 0)",
        fill: false,
      },
    ],
  };
  const options = {
    legend: false,
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };

  return (
    <div className="Chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
