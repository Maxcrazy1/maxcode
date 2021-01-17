import React, { useState, useEffect } from "react";
import ProjectService from "../../services/Project";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  // const [currentProject, setCurrentProject] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);

  const onDataChange = (fetchProjects) => {
    let projects = [];

    fetchProjects.forEach((project) => {
      let key = project.key;
      let data = project.val();
      projects.push({
        key: key,
        name_project: data.name_project,
        description: data.description,
        image_url: data.image_url,
        page_url: data.page_url,
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
      {projects.length > 0 ? (
        projects.map((project) => (
          <ul>
            <li>{project.name_project}</li>
            <li>{project.description} </li>
          </ul>
        ))
      ) : (
        <h3>Sin registros</h3>
      )}
    </div>
  );
};

export default ProjectList;
