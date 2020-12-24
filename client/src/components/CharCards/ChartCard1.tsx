import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SettingsIcon from "@material-ui/icons/Settings";
import "../../Styles/Card.css";
import { SettingsMenu } from "../SettingsMenu";

interface Props {
  memberNumber: number;
  chartType: any;
  Icon: any;
}

export const ChartCard1 = (props: Props) => {
  return (
    <div className="ChartCard">
      <div className="ChartCard__info">
        <div className="info__left">
          <h4>{props.memberNumber}</h4>
          <h4 className="left__infoText">Members Online</h4>
        </div>
        <div className="info__right">
          <Popup
            position={`bottom center`}
            trigger={<props.Icon className="right__settings" />}
          >
            <SettingsMenu
              firstMenuText={`Action`}
              secondMenuText={`Another Action`}
              thirdMenuText={`Something Else here`}
              fourthMenuText={`Disabled Action`}
            />
          </Popup>
        </div>
      </div>
      <div className="ChartCard__chart">
        <props.chartType />
      </div>
    </div>
  );
};
