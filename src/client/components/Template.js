import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Container } from "react-bootstrap";
import FooterNavbar from "../components/FooterNavbar";

const useStyles = makeStyles(() => ({
// "@global": {
// body: {
// backgroundColor:"#382E7E !important",
// "&::after":{
// content: "",
// position: "absolute",
// top: "100%",
// left: 0,
// height: "20px",
// width: "100%",
// backgroundColor: "red"
// },
// },
// },

  sidebarWrapper: {
    minHeight: "100vh !important",
    width: "7rem",
    marginLeft: "-4rem",
    WebkitTransition: "margin .25s ease-out",
    MozTransition: "margin .25s ease-out",
    OTransition: "margin .25s ease-out",
    transition: "margin .25s ease-out",
    position: "fixed",
    backgroundColor: "#252a34",
    zIndex: 1,
  },
  contentWrapper: {
    height: "100%",
    minWidth: 0,
    width: "97%",
    marginLeft: "3%",
    padding: 0,
  },
}));

const Template = ({ RenderComponent }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <React.Fragment>
      {width > breakpoint ? (
        <>
          <div className={classes.sidebarWrapper}>
            <Sidebar />
          </div>
          <div className={classes.contentWrapper}>{RenderComponent}</div>
        </>
      ) : (
        <Container fluid>
          <Row>
            <Col style={{padding:0}} xs={12}>
              {RenderComponent}
              <FooterNavbar />
            </Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Template;
