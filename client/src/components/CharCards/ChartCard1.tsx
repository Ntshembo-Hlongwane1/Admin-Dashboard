import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../../Styles/Card.css";
import { SettingsMenu } from "../SettingsMenu";
import LineChart from "../LineChart";
import axios from "axios";
import Pusher from "pusher-js";

interface Props {
  memberNumber: number;
  chartType: any;
  Icon: any;
}

export const ChartCard1 = (props: Props) => {
  const [data, setData] = useState<Array<string>>([]);
  const [totalUser, setTotalUsers] = useState<number>(0);

  useEffect(() => {
    const pusher = new Pusher("51e68616ba1b2353d788", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("totalusers");
    channel.bind("update", (data) => {
      setData(data.data.monthlyMembers);
      setTotalUsers(data.data.totalNumberOfMembers);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get-members")
      .then((response) => {
        setData(response.data.monthlyMembers);
        setTotalUsers(response.data.totalNumberOfMembers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ChartCard">
      <div className="ChartCard__info">
        <div className="info__left">
          <h4>{totalUser}</h4>
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
        <LineChart data={data} />
      </div>
    </div>
  );
};
