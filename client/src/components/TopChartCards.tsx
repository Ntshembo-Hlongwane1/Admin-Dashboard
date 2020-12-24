import React from "react";
import { ChartCard1 } from "./CharCards/ChartCard1";
import { ChartCard2 } from "./CharCards/ChartCard2";
import { ChartCard3 } from "./CharCards/ChartCard3";
import { ChartCard4 } from "./CharCards/ChartCard4";
import LineChart from "./LineChart";
import BarChart from "./BarChar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SettingsIcon from "@material-ui/icons/Settings";

import "../Styles/TopChartCards.css";

export const TopChartCards = () => {
  return (
    <div className="TopChartCards">
      <ChartCard1
        chartType={LineChart}
        memberNumber={9823}
        Icon={SettingsIcon}
      />
      <ChartCard2
        chartType={LineChart}
        memberNumber={9823}
        Icon={LocationOnIcon}
      />
      <ChartCard3
        chartType={LineChart}
        memberNumber={9823}
        Icon={SettingsIcon}
      />
      <ChartCard4
        chartType={BarChart}
        memberNumber={9823}
        Icon={SettingsIcon}
      />
    </div>
  );
};
