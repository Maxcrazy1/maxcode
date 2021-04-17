import React from "react";
import Sidebar from "./Sidebar";
import "../styles/sidebar.css";

const Template = ({RenderComponent}) => {
  return (
    <React.Fragment>
        <div id="sidebar-wrapper">
          <Sidebar />
        </div>
        <div id="page-content-wrapper">
          {RenderComponent}
        </div>
      </React.Fragment>
  );
};

export default Template;
