import React from "react";
import { Line, Circle } from "rc-progress";

interface Props {
  barColor: string;
  percentage;
}

export const TrafficChartProgress = (props: Props) => {
  return (
    <Line
      percent={props.percentage}
      strokeWidth={2}
      strokeColor={props.barColor}
    />
  );
};
