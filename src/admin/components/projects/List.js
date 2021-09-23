import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProjectService from "../../../services/Project";
import swal from "sweetalert";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProjectList = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  let history = useHistory();

  const handleClickDelete = (key) => {
    swal({
      title: "Delete project?",
      icon: "warning",
      buttons: true,
      dangerMode: true})
      .then((willDelete) => {
      if (willDelete) {
        ProjectService.remove(key)
          .then(() => {
            ProjectService.getAll().on("value", onDataChange);
          })

        swal("The project has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The project is kept saved");
      }
    });
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
        internalImages: data.internalImages,
        url: data.url,
        tags:data.tags
      });
    });

    setProjects(projects);
  };

  function setProject(project) {
    return history.push("/new", { project });
  }

  useEffect(() => {
    ProjectService.getAll().on("value", onDataChange);

    return () => {
      ProjectService.getAll().off("value", onDataChange);
    };
  }, []);

  return (
    <Grid container spacing={3}>
      {projects.length > 0 ? (
        projects.map((project) => (
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    M
                  </Avatar>
                }
                title={project.name}
              />
              <CardMedia
                className={classes.media}
                image={project.internalImage}
                title={project.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  onClick={(e) => handleClickDelete(project.key)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => setProject(project)}
                  aria-label="Edit"
                >
                  <EditIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <h3>Sin registros</h3>
      )}
    </Grid>
  );
};

export default ProjectList;
