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
import "../styles/helpers.css";

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

AOS.init();
const Contact = () => {
  return (
    <React.Fragment>
      <Template
        RenderComponent={
          <Container fluid className="h-100">
            <Row className="h-100">
              <Col xs={6} className="p-100 text-justify d-flex">
                <div className="m-auto">
                  <div data-aos="slide-right" >
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
                        src="https://cdn3.f-cdn.com/ppic/132863215/logo/23955762/QnRA0/profile_logo_.jpeg"
                        style={{
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </StyledBadge>

                    <Typography
                      className="title-font"
                      variant="h2"
                      component="h1"
                    >
                      Comunicate conmigo
                    </Typography>
                  </div>
                  <Typography data-aos="fade-up">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    aliquid repellendus ut maiores aperiam rerum officiis
                    quibusdam. Aspernatur voluptate totam, praesentium
                    blanditiis placeat repellat velit error facilis
                    exercitationem maiores veritatis?
                  </Typography>
                </div>
              </Col>
              <Col xs={6} data-aos="fade-left" className="m-auto">
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
