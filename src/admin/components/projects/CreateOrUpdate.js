import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ProjectService from "../../../services/Project";
import SaveIcon from "@material-ui/icons/Save";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Languages from "../../../services/Languages";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  fullWidth: {
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Form() {
  let history = useHistory();
  const classes = useStyles();
  const [keyProject, setKeyProject] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [internalImage, setInternalImage] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const setProject = (project) => {
      setName(project.name);
      setDescription(project.description);
      setImage(project.image);
      setInternalImage(project.internalImage);
      setUrl(project.url);
      setTags(project.tags);
      setKeyProject(project.key);
    };
    if (location.state) {
      setProject(location.state.project);
      delete location.state;
    }
  });

  function handleClick(e) {
    e.preventDefault();
    if (keyProject) {
      updateProject();
    } else {
      saveProject();
    }
  }

  const updateProject = () => {
    ProjectService.update(keyProject, setProject()).then(() => {
      return history.push("/", { message: "Project updated" });
    });
  };

  const saveProject = () => {
    ProjectService.create(setProject()).then(() => {
      return history.push("/", { message: "New project saved" });
    });
  };

  const setProject = () => {
    return {
      name,
      description,
      image,
      internalImage,
      tags,
      url,
    };
  };

  return (
    <Paper className={classes.paper}>
      <Container>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentTurnedInIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {location.state ? "Edit Project" : "New project"}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl className={classes.fullWidth}>
                <TextField
                  id="name-project"
                  label="Project Name"
                  placeholder="Maxcode"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.fullWidth}>
                <TextField
                  id="url-image"
                  label="Url Image"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.fullWidth}>
                <TextField
                  id="url-internal-image"
                  label="Url Internal Image"
                  value={internalImage}
                  onChange={(event) => setInternalImage(event.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.fullWidth}>
                <TextField
                  id="url-page"
                  label="Url page"
                  placeholder="clasifiventas.com"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl className={classes.fullWidth}>
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={Languages.map((language) => language)}
                  freeSolo
                  onChange={(event, value) => setTags(value.join(", "))}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="filled"
                      label="Languages"
                      placeholder="React, Laravel"
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.fullWidth}>
                <TextField
                  id="description"
                  label="Description"
                  value={description}
                  multiline
                  rows={4}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={(e) => handleClick(e)}
          >
            {keyProject ? "Save changes" : "Create Project"}
          </Button>
        </div>
      </Container>
    </Paper>
  );
}
