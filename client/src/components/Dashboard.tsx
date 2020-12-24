import React from "react";
import "../Styles/Dashboard.css";
import { Header } from "./Header";
import { TopChartCards } from "./TopChartCards";
import TrafficCardChart from "./TrafficCardChart";

interface Props {}

export const Dashboard = (props: Props) => {
  return (
    <div className="Dashboard">
      <Header />
      <TopChartCards />
      <TrafficCardChart />
    </div>
  );
};
