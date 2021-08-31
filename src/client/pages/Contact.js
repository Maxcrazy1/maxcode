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
    height: "100%"
  },
  mAuto:{
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:"auto",
    marginTop:"auto"
  },
  titleFont:{
    fontFamily: "Norwester !important"
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
                        src="https://cdn5.f-cdn.com/ppic/173745971/logo/23955762/IwVHg/profile_logo_RJBWG_ebcd036a0db50db993ae98ce380f6419.png"
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
                    Para mi sería un placer ayudarte a desarrollar tus ideas
                    🧠📲, comparte tus necesidades conmigo, a través de
                    cualquiera de los medios presentados en el recuadro, cuando
                    tenga un momento disponible responderé tu mensaje 📨 y
                    podremos analizar como dar con una solución ideal para todos
                    😃✅🌠
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
