import React from "react";
import { Nav } from "react-bootstrap";
import GrainIcon from "@material-ui/icons/Grain";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <>
      <Nav className="d-md-block bg-light sidebar" activeKey="/home">
        <div className="sidebar-sticky "></div>

        <div className="vertical-center">
          <Nav.Item className="mt-2" >
            <Link to="/about">
              <EmojiPeopleIcon style={{fill: "#08d9d6"}}/>
            </Link>
          </Nav.Item>
          <Nav.Item className="mt-2">
            <Link to="/">
              <GrainIcon style={{fill: "#08d9d6"}} />
            </Link>
          </Nav.Item>
          <Nav.Item className="mt-2">
            <Link to="/contact">
              <QuestionAnswerIcon  style={{fill: "#08d9d6"}}/>
            </Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
