import React from "react";
import { Dashboard } from "./Dashboard";
import { SideBar } from "./SideBar";
import "../Styles/Home.css";
interface Props {}

export const Home = (props: Props) => {
  return (
    <div className="Home">
      <SideBar />
      <Dashboard />
    </div>
  );
};
