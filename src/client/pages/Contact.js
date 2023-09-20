import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Avatar from "@material-ui/core/Avatar";
import Template from "../components/Template";
import Typography from "@material-ui/core/Typography";
import Profiles from "../components/Profiles";
import Badge from "@material-ui/core/Badge";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Row, Col, Container } from "react-bootstrap";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

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
    marginTop: "1.5rem",
    fontSize: "18px",
  },
  h100: {
    height: "100%",
  },
  mAuto: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginTop: "auto",
  },
  titleFont: {
    fontFamily: "Norwester !important",
  },
}));

AOS.init();
const Contact = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Template
        RenderComponent={
          <Container fluid className={classes.h100}>
            <Row className={classes.h100}>
              <Col
                xs={12}
                sm={12}
                md={6}
                className={classes.contentDescription}
              >
                <div className={classes.mAuto}>
                  <div data-aos="slide-right">
                    <StyledBadge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant="dot"
                    >
                      <Avatar
                        alt="Cristian Serrano"
                        src="https://i.imgur.com/Ua3VY8e.jpg"
                        style={{
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </StyledBadge>

                    <Typography
                      className={classes.titleFont}
                      variant="h2"
                      component="h1"
                    >
                      Comunicate conmigo
                    </Typography>
                  </div>
                  <Typography
                    className={classes.textDescription}
                    data-aos="fade-up"
                  >
                    ¡Hola! Estoy emocionado de tener la oportunidad de colaborar
                    contigo y ayudarte a convertir tus ideas en realidad. 🌟🤝
                    Como desarrollador, mi objetivo principal es comprender tus
                    necesidades y brindarte soluciones personalizadas y
                    eficientes. Estoy aquí para escucharte y trabajar en
                    conjunto para encontrar la mejor manera de alcanzar tus
                    objetivos. 🧠💡
                    <br></br>
                    <br></br>
                    Siéntete libre de comunicarte conmigo a través de cualquiera
                    de los medios que se encuentran en el recuadro. Ya sea por
                    correo electrónico, llamada telefónica o mensaje directo,
                    estaré encantado de recibir tu mensaje y responder en el
                    menor tiempo posible. 📲📨
                    <br></br>
                    <br></br>
                    ¡Estoy ansioso por comenzar esta emocionante colaboración
                    contigo! 💪🌠 ¡Espero con entusiasmo tu mensaje y la
                    oportunidad de trabajar juntos! Saludos cordiales.
                  </Typography>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                data-aos="fade-left"
                className={classes.mAuto}
              >
                <Profiles />
              </Col>
            </Row>
          </Container>
        }
      />
    </React.Fragment>
  );
};

export default Contact;
