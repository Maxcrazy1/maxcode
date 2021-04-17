import React from "react";
import Template from "../components/Template";
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