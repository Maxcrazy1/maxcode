import React from "react";
import Template from "../components/template";
import Gallery from "../components/Gallery";
import "../styles/sidebar.css";

const Home = () => {
  return (
    <React.Fragment>
      <Template RenderComponent={<Gallery />} />
    </React.Fragment>
  );
};

export default Home;