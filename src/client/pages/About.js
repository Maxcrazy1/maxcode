import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ReactTypingEffect from "react-typing-effect";
import Template from "../components/template";
import { Row, Col } from "react-bootstrap";
import PassionChip from "../components/PassionChip";
import "../styles/sidebar.css";
import "../styles/helpers.css";

AOS.init();
const About = () => {
  return (
    <React.Fragment>
      <Template
        RenderComponent={
          <Row className="h-100">
            <Col xs={7} className="p-100 text-justify d-flex">
              <div className="m-auto">
                <ReactTypingEffect
                  data-aos="fade-up"
                  className="text-uppercase h3 title-font"
                  text={[
                    "Siempre buscando mi siguiente nivel 🐺🏅",
                    "Enamorado del clean code 😍✒️",
                    "100% fan del deporte 🚵⚽🕺🏽",
                    "Soy Cristian Serrano 🤡👾👽🤙🏾",
                  ]}
                />
                <p data-aos="slide-left" className="mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis dolor nisi ducimus quae nemo quisquam eligendi qui rem
                  inventore distinctio alias enim nam ex eveniet, facilis, illo
                  iure consequuntur labore. Quod necessitatibus delectus earum
                  natus ratione soluta illo enim. Quia maxime excepturi
                  explicabo quis! Exercitationem ducimus pariatur, excepturi,
                  illo voluptatum veritatis et. Natus aspernatur quasi similique
                  pariatur?
                </p>

                <div data-aos="slide-right" className="text-center mt-4">
                  <PassionChip />
                </div>
              </div>
            </Col>
            <Col xs={5} className="p-0 h-100">
              <img
                data-aos="slide-left"
                className="w-100 h-100 img-cover"
                src="https://source.unsplash.com/QXDJGPZTwxs"
              />
            </Col>
          </Row>
        }
      />
    </React.Fragment>
  );
};

export default About;
