import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "../Styles/Chart.css";

interface Props {
  chartLineColor: string;
}
export default class BarChart extends Component<any, Partial<Props>> {
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
          backgroundColor: [
            "RGB(45, 28, 202)",
            "RGB(45, 28, 202)",
            "RGB(45, 28, 202)",
            "RGB(45, 28, 202)",
            "RGB(45, 28, 202)",
          ],
          pointBackgroundColor: "RGB(255, 37, 0)",
          pointBorderColor: "RGB(255, 37, 0)",
        },
      ],
    };
    this.options = {
      legend: false,
      scales: {
        xAxes: [
          {
            display: false,
            barPercentage: 0.4,
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
        <Bar data={this.data} options={this.options} />
      </div>
    );
  }
}
