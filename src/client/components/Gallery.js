import React, { useState, useEffect } from "react";
import ProjectService from "../../services/Project";
import ModalProject from "./ModalProject";
import Loading from "./Loading";
import marked from "marked";
import { Img } from "react-image";
import Skeleton from '@material-ui/lab/Skeleton';
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
              <a href="/#" onClick={(e) => setModalProject(project)}>

                <Img
                  src={project.image}
                  alt={project.name}
                  className="w-100 h-100 img-cover"
                  loader={<Skeleton  className="w-100 h-100 img-cover"/>}
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
      <ModalProject show={show} project={project} handleClose={handleClose} />
    </div>
  );
};

export default Gallery;
