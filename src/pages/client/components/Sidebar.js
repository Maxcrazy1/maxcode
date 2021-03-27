import React from "react";
import { Nav } from "react-bootstrap";
import GrainIcon from "@material-ui/icons/Grain";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Nav className="d-md-block bg-light sidebar" activeKey="/home">
        <div className="sidebar-sticky "></div>

        <div className="vertical-center">
          <Nav.Item>
            <Link to="/about">
              <EmojiPeopleIcon />
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/">
              <GrainIcon />
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">
              <QuestionAnswerIcon />
            </Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
