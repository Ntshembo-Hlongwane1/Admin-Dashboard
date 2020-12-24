import React from "react";
import "../Styles/Dashboard.css";
import { Header } from "./Header";

interface Props {}

export const Dashboard = (props: Props) => {
  return (
    <div className="Dashboard">
      <Header />
    </div>
  );
};
