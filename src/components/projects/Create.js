import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ProjectService from "../../services/Project";
import SaveIcon from "@material-ui/icons/Save";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

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
  const classes = useStyles();
  const [nameProject, setNameProject] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");

  function handleClick(e) {
    e.preventDefault();
    ProjectService.create({
      name: nameProject,
      description: description,
      image: imageUrl,
      url: pageUrl,
    })
      .then(() => {
        alert("Saved");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentTurnedInIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New project
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl className={classes.fullWidth}>
              <TextField
                id="name-project"
                label="Project Name"
                placeholder="Maxcode"
                onChange={(event) => setNameProject(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.fullWidth}>
              <TextField
                id="url-image"
                label="Url Image"
                onChange={(event) => setImageUrl(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.fullWidth}>
              <TextField
                id="url-page"
                label="Url page"
                placeholder="clasifiventas.com"
                onChange={(event) => setPageUrl(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.fullWidth}>
              <TextField
                id="description"
                label="Description"
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
          onClick={(e)=>handleClick(e)}
        >
          Add Project
        </Button>
      </div>
    </Container>
  );
}
