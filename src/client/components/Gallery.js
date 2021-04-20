import React, { useState, useEffect } from "react";
import ProjectService from "../../services/Project";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import marked from "marked";
import Chip from "@material-ui/core/Chip";
import "../styles/gallery.css";
import "../styles/helpers.css";

const fillChips = (language) => {
  return <Chip label={language} variant="outlined" />;
};

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
      let data = project.val();
      projects.push({
        key: project.key,
        name: data.name,
        description: marked(data.description),
        image: data.image,
        internalImage: data.internalImage,
        url: data.url,
        tags: data.tags ? data.tags.split(",") : [],
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
              key={project.key}
              className={`${index === 4 ? "height-top" : ""} ${
                index === 1 ? "short-height" : ""
              }`}
            >
              <a onClick={(e) => setModalProject(project)}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-100 h-100 img-cover"
                />
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
          {project.tags
            ? project.tags.map((language) => fillChips(language))
            : null}
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={5}>
              <img src={project.internalImage} alt={project.name} />
            </Col>
            <Col
              className="paragraph-font"
              xs={7}
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;