import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import { Img } from "react-image";
import Skeleton from "@material-ui/lab/Skeleton";
import "../../styles/helpers.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";


const fillChips = (language) => {
  return (
    <Chip className="m-1" key={language} label={language} variant="outlined" />
  );
};

const setImagesProject = (image,classes) => {
  return (
            <Img
              src={image}
              alt="image project"
              className={classes.imgCover}
              loader={<Skeleton animation="wave" height="100%" />}
            />
 
  );
};


const useStyles = makeStyles((theme) => ({
  imgCover: {
    height: "100%",
    objectFit: "contain",
    objectPosition: "center center",
  },
  h100: {
    height: "100% !important",
  },
  w100: {
    width: "100% !important",
  },
  textCenter:{
    textAlign: "center"
  },
  titleFont:{
    fontFamily: 'Norwester !important'
  },
  textDescription:{
    textAlign:"justify",
    marginBottom: "auto",
    marginTop: "auto",
    paddingLeft:"1.5rem",
    paddingRight:"1.5rem",
  }

}));



const ModalProject = ({ project, show, handleClose }) => {
const classes = useStyles();
  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header className={classes.textCenter} closeButton>
        <Row className={classes.w100}>
          <Col xs={12} className="mb-2">
            <a href={project.url} rel="noreferrer noopener" target="_blank">
              <Modal.Title className={classes.titleFont}>{project.name}</Modal.Title>
            </a>
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
          <Col xs={12} sm={12} md={5}>
            
          <Carousel
infiniteLoop
autoPlay
          stopOnHover
          interval={3500}
          showIndicators={false}
          showStatus={false}
          showArrows={true}>
            {project.internalImages
              ? project.internalImages.map((internalImage) => setImagesProject(internalImage,classes))
              : null}
 
         </Carousel>
          </Col>
          <Col
            className={classes.textDescription}
            xs={12}
            sm={12}
            md={7}
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ModalProject;
