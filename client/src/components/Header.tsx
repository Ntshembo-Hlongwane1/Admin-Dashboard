import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SmsIcon from "@material-ui/icons/Sms";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import SettingsIcon from "@material-ui/icons/Settings";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../Styles/Header.css";
import axios from "axios";
import ProfileImage from "../Assets/profilePic.jpg";

export const Header = () => {
  const addMember = () => {
    const numberOfMembers = Math.floor(Math.random() * 100) + 1;

    const baseURL = {
      dev: `http://localhost:5000/api/add-member/${numberOfMembers}`,
      prod: "",
    };

    const url = baseURL.dev;

    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className="nav">
      <div className="nav__top">
        <div className="top__left">
          <div className="left-icon">
            <MenuIcon className="left-menu-icon" />
          </div>
          <div className="left-textlink">
            <h4 className="nav-link">Dashboard</h4>
            <h4 className="nav-link">Users</h4>
            <h4 className="nav-link">Settings</h4>
          </div>
        </div>
        <div className="top__right">
          <NightsStayIcon className="right-nav-link" />
          <NotificationsIcon className="right-nav-link" />
          <FormatListBulletedIcon className="right-nav-link" />
          <MailOutlineIcon className="right-nav-link" />
          <Popup
            trigger={
              <Avatar
                src={ProfileImage}
                alt="User Profile Image"
                className="right-nav-link"
              />
            }
          >
            <div className="user__menu">
              <h4 className="user__menu-link" onClick={addMember}>
                Add Monthy Member
              </h4>
              <h4 className="user__menu-link">Add Sales Income</h4>
              <h4 className="user__menu-link">Add Gross Income</h4>
              <h4 className="user__menu-link">Add Monthly Income</h4>
            </div>
          </Popup>
          <AppsIcon className="right-nav-link" />
        </div>
      </div>
      <div className="nav__bottom">
        <div className="bottom__left">
          <h4 className="bottom-nav-text">Home / Dashboard</h4>
        </div>
        <div className="bottom__right">
          <SmsIcon className="bottom-right-navLink" />
          <div className="right__dashboardNavLink">
            <ShowChartIcon className="bottom-right-icons" />
            <h4 className="bottom-nav-text">Dashboard</h4>
          </div>
          <div className="right__settings">
            <SettingsIcon className="bottom-right-icons" />
            <h4 className="bottom-nav-text">Settings</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};
