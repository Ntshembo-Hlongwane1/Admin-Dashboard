import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import MapIcon from "@material-ui/icons/Map";
import OpacityIcon from "@material-ui/icons/Opacity";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import NearMeIcon from "@material-ui/icons/NearMe";
import CodeIcon from "@material-ui/icons/Code";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ExtensionIcon from "@material-ui/icons/Extension";
import SpeedIcon from "@material-ui/icons/Speed";
import { SideBarLayout } from "./SideBarLayout";
import "../Styles/SideBar.css";

export const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="Sidbar__header">
        <SideBarLayout Icon={SpeedIcon} text={`Dashboard`} />
      </div>
      <div className="Sidebar__theme">
        <h3>Theme</h3>
        <div className="theme__content">
          <SideBarLayout Icon={OpacityIcon} text={`Colors`} />
          <SideBarLayout Icon={CreateIcon} text={`Typography`} />
        </div>
      </div>
      <div className="Sidebar__components">
        <h3>Components</h3>
        <div className="componets__content">
          <SideBarLayout Icon={ExtensionIcon} text={`Base`} />
          <SideBarLayout Icon={NearMeIcon} text={`Buttons`} />
          <SideBarLayout Icon={DonutSmallIcon} text={`Charts`} />
          <SideBarLayout Icon={CodeIcon} text={`Editors`} />
          <SideBarLayout Icon={ListAltIcon} text={`Forms`} />
          <SideBarLayout Icon={MapIcon} text={`Google Maps`} />
        </div>
      </div>
    </div>
  );
};
