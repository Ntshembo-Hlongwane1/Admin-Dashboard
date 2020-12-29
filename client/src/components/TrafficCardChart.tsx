import React, { useEffect, useState } from "react";
import { TrafficChart } from "./TrafficChart";
import "../Styles/TrafficCardChart.css";
import { ProgressStats } from "./ProgressStats";
import axios from "axios";
import Pusher from "pusher-js";

interface Props {
  isSelected1: Boolean;
  isSelected2: Boolean;
  isSelected3: Boolean;
  toggleState: Boolean;
}

const TrafficCardChart = () => {
  const [isSelected1, setIsSelected1] = useState<Boolean>(false);
  const [isSelected2, setIsSelected2] = useState<Boolean>(false);
  const [isSelected3, setIsSelected3] = useState<Boolean>(false);

  const [data, setData] = useState<Array<string>>([]);
  const [totalUser, setTotalUsers] = useState<number>(0);
  const [array1, setArray1] = useState<Array<string>>([]);
  const [array2, setArray2] = useState<Array<string>>([]);

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
        console.log(response);
        setData(response.data.monthlyMembers);

        setTotalUsers(response.data.totalNumberOfMembers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const shuffle = (array: Array<string>) => {
    var tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  };

  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const ActivateOption = (e: any) => {
    switch (e.target.id) {
      case "isSelected1":
        if (isSelected2 === true) {
          setIsSelected2(false);
        }
        if (isSelected3 === true) {
          setIsSelected3(false);
        }
        setIsSelected1(!isSelected1);
        break;

      case "isSelected2":
        if (isSelected3 === true) {
          setIsSelected3(false);
        }
        if (isSelected1 === true) {
          setIsSelected1(false);
        }
        setIsSelected2(!isSelected2);
        break;
      case "isSelected3":
        if (isSelected2 === true) {
          setIsSelected2(false);
        }
        if (isSelected1 === true) {
          setIsSelected1(false);
        }
        setIsSelected3(!isSelected3);
        break;
    }
  };
  return (
    <div className="TrafficCardChart">
      <div className="topTrafficChart__container">
        <div className="TrafficCardChart__top">
          <div className="topChart__left">
            <h3 className="topChart__leftHeader">Traffic</h3>
            <h4 className="topChart__leftDate">{`${
              monthNames[date.getMonth()]
            } ${date.getFullYear()}`}</h4>
          </div>
          <div className="topChart__right">
            <h4
              className={`topChart__rightDataOptions ${
                isSelected1 ? "active-option" : null
              }`}
              id="isSelected1"
              onClick={ActivateOption}
            >
              Day
            </h4>
            <h4
              className={`topChart__rightDataOptions ${
                isSelected2 ? "active-option" : null
              }`}
              id="isSelected2"
              onClick={ActivateOption}
            >
              Month
            </h4>
            <h4
              className={`topChart__rightDataOptions last-option ${
                isSelected3 ? "active-option" : null
              }`}
              id="isSelected3"
              onClick={ActivateOption}
            >
              Year
            </h4>
          </div>
        </div>
        <div className="TrafficCardChart__bottom">
          <TrafficChart />
        </div>
      </div>
      <div className="bottomTrafficChart__container">
        <div className="progresschart">
          <ProgressStats
            color={`RGB(127, 255, 0)`}
            percentage={40}
            progressHeader={`Visits`}
            statsNumber={`29,703`}
          />
        </div>
        <div className="progresschart">
          <ProgressStats
            color={`RGB(0, 204, 255)`}
            percentage={20}
            progressHeader={`Unique`}
            statsNumber={`24,093`}
          />
        </div>
        <div className="progresschart">
          <ProgressStats
            color={`RGB(240, 140, 0)`}
            percentage={60}
            progressHeader={`PageViews`}
            statsNumber={`78,706`}
          />
        </div>
        <div className="progresschart">
          <ProgressStats
            color={`RGB(255, 37, 0)`}
            percentage={80}
            progressHeader={`New Users`}
            statsNumber={`22,123`}
          />
        </div>
      </div>
    </div>
  );
};

export default TrafficCardChart;
