import React from "react";
import "../Styles/MenuPopup.css";

interface Props {
  firstMenuText: string;
  secondMenuText: string;
  thirdMenuText: string;
  fourthMenuText: string;
}

export const SettingsMenu = (props: Props) => {
  return (
    <div className="settings__menu">
      <h4 className="settings__menuText">{props.firstMenuText}</h4>
      <h4 className="settings__menuText">{props.secondMenuText}</h4>
      <h4 className="settings__menuText">{props.thirdMenuText}</h4>
      <h4 className="settings__menuText last-menuText">
        {props.fourthMenuText}
      </h4>
    </div>
  );
};
