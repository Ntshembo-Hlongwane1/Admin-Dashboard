import React from "react";
import { TrafficChartProgress } from "./TrafficChartProgress";
import "../Styles/ProgressStats.css";

interface Props {
  progressHeader: string;
  statsNumber: number;
  percentage: number;
  color: string;
}

export const ProgressStats = (props: Props) => {
  return (
    <div className="ProgressStats">
      <div className="ProgressStats__header">
        <h3 className="ProgressStats__header">{props.progressHeader}</h3>
      </div>
      <div className="progress__info">
        <h4>{`${props.statsNumber} Users (${props.percentage}%)`}</h4>
      </div>
      <div className="progress__bar">
        <TrafficChartProgress
          percentage={props.percentage}
          barColor={props.color}
        />
      </div>
    </div>
  );
};
