import React from "react";
import "../Styles/SidebarLayout.css";

interface Props {
  Icon: any;
  text: string;
}

export const SideBarLayout = (props: Props) => {
  return (
    <div className="SideBarLayout">
      <div className="SideBarLayout__Icon">
        <props.Icon />
      </div>
      <div className="SideBarLayout__Text">
        <h4 className="Sidebar__text">{props.text}</h4>
      </div>
    </div>
  );
};
