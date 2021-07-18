import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { makeStyles } from "@material-ui/core/styles";
import ReactTypingEffect from "react-typing-effect";
import Template from "../components/Template";
import { Row, Col, Container } from "react-bootstrap";
import PassionChip from "../components/PassionChip";
import Typography from "@material-ui/core/Typography";
import { Img } from "react-image";
import CircularProgress from "@material-ui/core/CircularProgress";
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
  textDescription: {
    fontFamily: "Kollektif",
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "18px",
  },
  titleFont: {
    textTransform: "uppercase",
    opacity: "1 !important",
    fontFamily: "Norwester",
    fontSize: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  loaderCenter:{
    position: "absolute",
    top: "50%",
    left: "50%"
}
}));

AOS.init();
const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Template
        RenderComponent={
          <Container fluid>
            <Row className="">
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
                    speed={60}
                    eraseSpeed={70}
                    typingDelay={500}
                    text={[
                      "Siempre buscando mi siguiente nivel 🐺🏅",
                      "Enamorado del clean code 😍✒️",
                      "100% fan del deporte 🚵🏀⚽🕺",
                      "Soy Cristian Serrano 🤡👾👽🤙",
                    ]}
                  />
                  <Typography
                    data-aos="slide-right"
                    className={classes.textDescription}
                  >
                    Me he vuelto un aficionado del código desde hace unos
                    cuantos años atras, lo que me ha impulsado a enfretarme a
                    muchos desafios 🤔, sin embargo siempre tomo en cuenta una
                    frase: "Algún día diré: 'estuvo complejo, pero lo logré'".
                    En mi viaje 🛫 seguiran habiendo muchos peldaños que seguir
                    subiendo, aún así lo hago con animo 🤩💪, porque me encanta
                    desarrollar aplicaciones, sistemas y soluciones modulares,
                    prolijas y escalables ✅💻📱
                  </Typography>

                  <div data-aos="slide-right" className="text-center mt-4">
                    <PassionChip />
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={5} className="p-0">
              <Img
                  src="https://source.unsplash.com/QXDJGPZTwxs"
                  alt="mobile"
                  loader={<CircularProgress className={classes.loaderCenter} />}
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