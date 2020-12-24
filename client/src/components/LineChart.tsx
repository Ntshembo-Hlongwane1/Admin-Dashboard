import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../Styles/Chart.css";

interface Props {
  chartLineColor: string;
}
export default class LineChart extends Component<any, Partial<Props>> {
  private data: Object;
  private options: Object;
  constructor(props) {
    super(props);
    this.data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Members Online",
          data: [58, 100, 25, 56, 222, 150, 80, 95],
          borderColor: [`RGB(134, 142, 150)`],
          // backgroundColor: ["RGB(45, 28, 202)"],
          pointBackgroundColor: "RGB(255, 37, 0)",
          pointBorderColor: "RGB(255, 37, 0)",
          fill: false,
        },
      ],
    };
    this.options = {
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
  }

  render() {
    return (
      <div className="Chart">
        <Line data={this.data} options={this.options} />
      </div>
    );
  }
}
