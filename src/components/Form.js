import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

export default function Form() {
  const [nameProject, setNameProject] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyDMbWZxVL9eR55tylxPy1f0lwW6BwNxPC8",
    authDomain: "maxcode-1063f.firebaseapp.com",
    projectId: "maxcode-1063f",
    storageBucket: "maxcode-1063f.appspot.com",
    messagingSenderId: "311764813636",
    appId: "1:311764813636:web:73a9a0ea9be9ff6ed9f911",
    measurementId: "G-TGPQ3D9YEG",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const database = firebase.database();

  function handleClick(e) {
    e.preventDefault();
    database.ref("projects/").set({
      name_project: nameProject,
      description: description,
      image_url: imageUrl,
    });
  }

  return (
    <form>
      <div>
        <FormControl>
          <TextField
            id="name-project"
            label="Project name"
            variant="outlined"
            onChange={(event) => setNameProject(event.target.value)}
          />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <TextField
            id="url-image"
            label="Url Image"
            variant="outlined"
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </FormControl>
      </div>
      <div>
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </form>
  );
}
