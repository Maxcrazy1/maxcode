import React, { useState, useEffect } from "react";
import ProjectService from "../../services/Project";
import ModalProject from "./ModalProject";
import Loading from "./Loading";
import marked from "marked";
import { Img } from "react-image";
import Skeleton from "@material-ui/lab/Skeleton";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/gallery.css";
import "../styles/helpers.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      overflow: "hidden",
    },
  },
}));

const Gallery = () => {
  const [project, setProject] = useState([]);
  const [higlightProjects] = useState([0, 1, 2, 3, 4, 5]);
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const setModalProject = (project) => {
    setShow(true);
    setProject(project);
  };

  const setAllProjects = (result) => {
    let projects = setProjectsInArray(result);
    setProjects(projects);
  };

  const setProjectsInArray = (fetchProjects) => {
    let projects = [];

    let index = 0;
    fetchProjects.forEach(function (project) {
      let data = project.val();
      index > 5
        ? (projects[index - 6] = [
            ...projects[index - 6],
            {
              key: project.key,
              name: data.name,
              description: marked(data.description),
              image: data.image,
              internalImage: data.internalImage,
              url: data.url,
              tags: data.tags ? data.tags.split(",") : [],
            },
          ])
        : (projects[index] = [
            {
              key: project.key,
              name: data.name,
              description: marked(data.description),
              image: data.image,
              internalImage: data.internalImage,
              url: data.url,
              tags: data.tags ? data.tags.split(",") : [],
            },
          ]);
      index = index + 1;
    });

    return projects;
  };

  const setItemsToCarousel = (index) => {
    return projects.length > 0 ? (
      projects[index].map((project) => (
        <div className="h-100" key={project.key}>
          <a href="/#" onClick={(e) => setModalProject(project)}>
            <Img
              src={project.image}
              alt={project.name}
              className="w-100 h-100 img-cover"
              loader={<Skeleton className="w-100 h-100 img-cover" />}
            />
            <div className="box_data">
              <span>{project.name}</span>
            </div>
          </a>
        </div>
      ))
    ) : (
      <Loading />
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    ProjectService.getAll().on("value", setAllProjects);

    return () => {
      ProjectService.getAll().off("value", setAllProjects);
    };
  });

  const classes = useStyles();
  return (

    <div>
      <ul className="gallery_box">
        {higlightProjects.map((index) => (
          <li
            key={index}
            className={`${index === 4 ? "height-top" : ""} ${
              index === 1 ? "short-height" : ""
            }`}
          >
            {projects.length > 0 ? (
              <Carousel
                infiniteLoop
                autoPlay
                stopOnHover
                interval={3500}
                showIndicators={false}
                showStatus={false}
                showArrows={true}
                key={index}
              >
                {setItemsToCarousel(index)}
              </Carousel>
            ) : (
              <Loading />
            )}
          </li>
        ))}
      </ul>
      <ModalProject show={show} project={project} handleClose={handleClose} />
    </div>
  );
};

export default Gallery;
