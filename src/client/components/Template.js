import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Container } from "react-bootstrap";
import FooterNavbar from "../components/FooterNavbar";
import Link from '@material-ui/core/Link';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(() => ({
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
  floatRound:{
    	position:'fixed',
	width:'60px',
	height:'60px',
	bottom:'40px',
	right:'40px',
	backgroundColor:'#25d366',
	color:'#FFF',
	borderRadius:'50px',
	textAlign:'center',
  fontSize:'30px',
	boxShadow: '2px 2px 3px #999',
  zIndex:100,
  },
  iconWs:{
    fontSize:'35px',
    marginTop:'8px'
  }

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
          <div className={classes.contentWrapper}>{RenderComponent}
      <Link target="_blank" className={classes.floatRound} href="https://api.whatsapp.com/send?phone=+584241722195&text=Estamos%20interesados%20en%20comunicarnos%20contigo%20%F0%9F%A4%9D">
        <WhatsAppIcon className={classes.iconWs} />
      </Link>


          </div>

        </>
      ) : (
        <Container fluid>
          <Row>
            <Col style={{padding:0}} xs={12}>
              {RenderComponent}
<Link target="_blank" className={classes.floatRound} href="https://api.whatsapp.com/send?phone=+584241722195&text=Estamos%20interesados%20en%20comunicarnos%20contigo%20%F0%9F%A4%9D">
        <WhatsAppIcon className={classes.iconWs} />
      </Link>
              <FooterNavbar />
            </Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Template;
