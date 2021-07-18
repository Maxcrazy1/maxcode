import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Template from "../components/Template";
import { Row, Container } from "react-bootstrap";
import "../styles/helpers.css";
import AboutFirstRow from "../partials/AboutFirstRow";
import AboutSecondRow from "../partials/AboutSecondRow";
import AboutThirdRow from "../partials/AboutThirdRow";
AOS.init();
const About = () => {
  return (
    <React.Fragment>
      <Template
        RenderComponent={
          <Container>
            <Row className="mb-4" data-aos="fade-up-left">
              <AboutFirstRow />
              <AboutSecondRow/>
              <AboutThirdRow />
            </Row>
          </Container>
        }
      />
    </React.Fragment>
  );
};

export default About;
