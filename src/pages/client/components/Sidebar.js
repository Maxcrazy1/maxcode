import React from "react";
import { Nav } from "react-bootstrap";
import GrainIcon from "@material-ui/icons/Grain";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <>
      <Nav className="d-md-block bg-light sidebar" activeKey="/home">
        <div className="sidebar-sticky "></div>

        <div className="vertical-center">
          <Nav.Item>
            <Nav.Link href="/about">
              <EmojiPeopleIcon />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <GrainIcon />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <QuestionAnswerIcon />
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
