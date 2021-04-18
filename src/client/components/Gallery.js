import React, { useState, useEffect } from "react";
import ProjectService from "../../services/Project";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import "../styles/gallery.css";
import "../styles/helpers.css";

const Gallery = () => {
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const setModalProject = (project) => {
    setShow(true);
    setProject(project);
  };
  const onDataChange = (fetchProjects) => {
    let projects = [];

    fetchProjects.forEach((project) => {
      let key = project.key;
      let data = project.val();
      projects.push({
        key: key,
        name: data.name,
        description: data.description,
        image: data.image,
        internalImage: data.internalImage,
        url: data.url,
      });
    });

    setProjects(projects);
  };

  useEffect(() => {
    ProjectService.getAll().on("value", onDataChange);

    return () => {
      ProjectService.getAll().off("value", onDataChange);
    };
  }, []);

  return (
    <div>
      <ul className="gallery_box">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <li
              className={`${index === 4 ? "height-top" : ""} ${
                index === 1 ? "short-height" : ""
              }`}
            >
              <a onClick={(e) => setModalProject(project)}>
                <img src={project.image} className="w-100 h-100 img-cover" />
                <div className="box_data">
                  <span>{project.name}</span>
                </div>
              </a>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title-font">{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={5}>
              <img src={project.internalImage} />
            </Col>
            <Col className="paragraph-font" xs={7}>
              {project.description}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
