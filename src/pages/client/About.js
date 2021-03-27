import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import "./styles/sidebar.css";
import "./styles/helpers.css";

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={1} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={11} id="page-content-wrapper">
          <Row>
            <Col xs={7} className="p-80 text-justify d-flex">
              <div className="m-auto">
                <h1>My personal project</h1>
                <p>
                  I’ve spent the past 12+ years working across different areas
                  of digital design; front-end development, email design,
                  marketing site pages, app UI/UX, to my current role designing
                  products for mobile platforms. These days my time is spent
                  researching, designing, prototyping, and coding. I also help
                  designers get started with their careers. Out of the office
                  you’ll find me dreaming of soccer, playing bass guitar, and
                  petting all the good dogs.
                </p>
              </div>
            </Col>
            <Col xs={5}>
              <img className="p-5" src="https://source.unsplash.com/weekly?water"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
