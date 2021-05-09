import React from 'react';
import {Modal, Row, Col} from "react-bootstrap";
import Chip from "@material-ui/core/Chip";

const fillChips = (language) => {
  return <Chip className="m-1" key={language} label={language} variant="outlined" />;
};

const ModalProject = ({project,show,handleClose})=> {

  return(
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header className="text-center" closeButton>
        <Row className="w-100">
          <Col xs={12}  className="mb-2">
            <a href={project.url} rel="noreferrer noopener" target="_blank"><Modal.Title className="title-font">{project.name}</Modal.Title></a>
          </Col>
          <Col xs={12}>
            {project.tags
              ? project.tags.map((language) => fillChips(language))
              : null}
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} sm={12} md={5} className="mb-4">
            <img src={project.internalImage} alt={project.name} />
          </Col>
          <Col
            className="paragraph-font my-auto px-4 text-justify"
            xs={12} sm={12} md={7}
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ModalProject;
