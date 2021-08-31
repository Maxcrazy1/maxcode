import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Template from "../components/Template";
import { Row, Container } from "react-bootstrap";
import "../styles/helpers.css";
import AboutFirstRow from "../partials/AboutFirstRow";
import AboutSecondRow from "../partials/AboutSecondRow";
import AboutThirdRow from "../partials/AboutThirdRow";
import { makeStyles } from "@material-ui/core/styles";
AOS.init();

const useStyles = makeStyles(() => ({
    mb4: {
      marginBottom: 4,
    },
}));
 
const About = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
      <Template
        RenderComponent={
          <Container>
            <Row className={classes.mb4} data-aos="flip-up">
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
