import React, { useState, useEffect } from "react";
import ProjectService from "../../../services/Project";

import { Modal, Button, Row, Col } from "react-bootstrap";
import "../styles/gallery.css";

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
          projects.map((project) => (
            <li>
              <a onClick={(e)=>setModalProject(project)}>
                <img src={project.image} />
                <div className="box_data">
                  <span>{project.name} </span>
                </div>
              </a>
            </li>
          ))
        ) : (
          <h3>Sin registros</h3>
        )}
      </ul>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={5}>
              <img src="https://source.unsplash.com/800x600/?tech" />
            </Col>
            <Col xs={7}>{project.description}</Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
