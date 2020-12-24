import React, { Component } from "react";
import { TrafficChart } from "./TrafficChart";
import "../Styles/TrafficCardChart.css";
import { TrafficChartProgress } from "./TrafficChartProgress";
import { ProgressStats } from "./ProgressStats";

interface Props {
  isSelected1: Boolean;
  isSelected2: Boolean;
  isSelected3: Boolean;
  toggleState: Boolean;
}

export default class TrafficCardChart extends Component<any, Partial<Props>> {
  private date: Date;
  private monthNames: Array<string>;
  constructor(props) {
    super(props);
    this.state = {
      isSelected1: false,
      isSelected2: false,
      isSelected3: false,
      toggleState: false,
    };
    this.date = new Date();
    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.ActivateOption = this.ActivateOption.bind(this);
  }

  ActivateOption(e: any) {
    switch (e.target.id) {
      case "isSelected1":
        if (this.state.isSelected1 === true) {
          this.setState({
            isSelected1: false,
          });
        } else {
          if (this.state.isSelected3 === true) {
            this.setState({
              isSelected3: false,
            });
          }
          if (this.state.isSelected2 === true) {
            this.setState({
              isSelected2: false,
            });
          }
          this.setState({
            isSelected1: true,
          });
        }
        break;
      case "isSelected2":
        if (this.state.isSelected2 === true) {
          this.setState({
            isSelected2: false,
          });
        } else {
          if (this.state.isSelected1 === true) {
            this.setState({
              isSelected1: false,
            });
          }
          if (this.state.isSelected3 === true) {
            this.setState({
              isSelected3: false,
            });
          }
          this.setState({
            isSelected2: true,
          });
        }
        break;
      case "isSelected3":
        if (this.state.isSelected3 === true) {
          this.setState({
            isSelected3: false,
          });
        } else {
          if (this.state.isSelected1 === true) {
            this.setState({
              isSelected1: false,
            });
          }
          if (this.state.isSelected2 === true) {
            this.setState({
              isSelected2: false,
            });
          }
          this.setState({
            isSelected3: true,
          });
        }
        break;

      default:
        return this.state;
    }
  }

  render() {
    return (
      <div className="TrafficCardChart">
        <div className="topTrafficChart__container">
          <div className="TrafficCardChart__top">
            <div className="topChart__left">
              <h3 className="topChart__leftHeader">Traffic</h3>
              <h4 className="topChart__leftDate">{`${
                this.monthNames[this.date.getMonth()]
              } ${this.date.getFullYear()}`}</h4>
            </div>
            <div className="topChart__right">
              <h4
                className={`topChart__rightDataOptions ${
                  this.state.isSelected1 ? "active-option" : null
                }`}
                id="isSelected1"
                onClick={this.ActivateOption}
              >
                Day
              </h4>
              <h4
                className={`topChart__rightDataOptions ${
                  this.state.isSelected2 ? "active-option" : null
                }`}
                id="isSelected2"
                onClick={this.ActivateOption}
              >
                Month
              </h4>
              <h4
                className={`topChart__rightDataOptions last-option ${
                  this.state.isSelected3 ? "active-option" : null
                }`}
                id="isSelected3"
                onClick={this.ActivateOption}
              >
                Year
              </h4>
            </div>
          </div>
          <div className="TrafficCardChart__bottom">
            <TrafficChart />
          </div>
        </div>
        <div className="bottomTrafficChart__container">
          <div className="progresschart">
            <ProgressStats
              color={`RGB(127, 255, 0)`}
              percentage={40}
              progressHeader={`Visits`}
              statsNumber={29703}
            />
          </div>
          <div className="progresschart">
            <ProgressStats
              color={`RGB(0, 204, 255)`}
              percentage={20}
              progressHeader={`Unique`}
              statsNumber={24093}
            />
          </div>
          <div className="progresschart">
            <ProgressStats
              color={`RGB(240, 140, 0)`}
              percentage={60}
              progressHeader={`PageViews`}
              statsNumber={78706}
            />
          </div>
          <div className="progresschart">
            <ProgressStats
              color={`RGB(255, 37, 0)`}
              percentage={80}
              progressHeader={`New Users`}
              statsNumber={22123}
            />
          </div>
        </div>
      </div>
    );
  }
}
