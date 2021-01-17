import React, { useState } from "react";

import firebase from "firebase/app";
import ProjectService from '../services/ProjectService'
import "firebase/firestore";
import "firebase/database";

export default function ListProjects() {
  const [projects, setProjects] = useState([]);
  var objectData = [];
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

  var data = database.ref("projects/");

  // Attach an asynchronous callback to read the data at our posts reference

  return (
    <div>
      <p>Lista</p>
      <p>{projects}</p>
      {/* {projects.length>0?
      projects.map((project) => (
        <li>
          <ul>{project.name}</ul>
          <ul>{project.description}</ul>
        </li>
      )): */}
      <h3>Empty projects</h3>
    </div>
  );
}
