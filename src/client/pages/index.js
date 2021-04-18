import React from "react";
import Template from "../components/Template";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <React.Fragment>
      <Template RenderComponent={<Gallery />} />
    </React.Fragment>
  );
};

export default Home;