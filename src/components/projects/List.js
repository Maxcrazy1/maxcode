import React, { useState, useEffect } from "react";
import ProjectService from "../../services/Project";
import swal from 'sweetalert';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

  const handleClick = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // const deleteTutorial = () => {
  //   TutorialDataService.remove(currentTutorial.key)
  //     .then(() => {
  //       props.refreshList();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };


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
    <Grid container spacing={3}>
      {projects.length > 0 ? (
        projects.map((project) => (
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={project.name}
                subheader={"15 September, 2020"}
              />
              <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title={project.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton onClick={(e)=>handleClick(e)} aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit">
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

