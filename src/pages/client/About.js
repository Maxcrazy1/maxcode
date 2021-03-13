
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import "./styles/sidebar.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={1} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={11} id="page-content-wrapper">

        </Col>
      </Row>
    </Container>
  );
};

export default Home;
