import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { makeStyles } from "@material-ui/core/styles";
import ReactTypingEffect from "react-typing-effect";
import Template from "../components/Template";
import { Row, Col, Container } from "react-bootstrap";
import PassionChip from "../components/PassionChip";

import "../styles/helpers.css";

const useStyles = makeStyles((theme) => ({
  contentDescription: {
    padding: "5rem",
    textAlign: "justify",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
      marginBottom: "2rem",
    },
  },
  titleFont: {
    textTransform: "uppercase",
    opacity: '1 !important',
    fontFamily: "Norwester",
    fontSize: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
}));

AOS.init();
const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Template
        RenderComponent={
          <Container fluid>
            <Row className="h-100">
              <Col
                xs={12}
                sm={12}
                md={7}
                className={classes.contentDescription}
              >
                <div className="m-auto">
                  <ReactTypingEffect
                    data-aos="fade-up"
                    className={classes.titleFont}
                    text={[
                      "Siempre buscando mi siguiente nivel 🐺🏅",
                      "Enamorado del clean code 😍✒️",
                      "100% fan del deporte 🚵🏀⚽🕺🏽",
                      "Soy Cristian Serrano 🤡👾👽🤙🏾",
                    ]}
                  />
                  <p data-aos="slide-left" className="mt-4">
		Me he vuelto un aficionado del código desde hace unos cuantos años atras, lo que me ha impulsado a enfretarme a muchos desafios 🤔,
	sin embargo siempre tomo en cuenta una frase: "Algún día diré: 'estuvo complejo, pero lo logré'". En mi viaje 🛫 seguiran habiendo muchos peldaños que seguir subiendo, aún así lo hago con animo 🤩💪, porque me encanta desarrollar aplicaciones, sistemas y soluciones modulares, prolijas y escalables ✅💻📱</p>

                  <div data-aos="slide-right" className="text-center mt-4">
                    <PassionChip />
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={5} className="p-0 h-100">
                <img
                  alt="about"
                  data-aos="slide-left"
                  className="w-100 h-100 img-cover"
                  src="https://source.unsplash.com/QXDJGPZTwxs"
                />
              </Col>
            </Row>
          </Container>
        }
      />
    </React.Fragment>
  );
};

export default About;
