import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
//firebase, instal di cms (npm install firebase)
import * as firebase from 'firebase';
//intialize (Copy dari firebase)
  var config = {
    apiKey: "AIzaSyABhO3xCrLAZy1xuEOBpi5TpA-MFexU9iE",
    authDomain: "sirkelrsvp-78394.firebaseapp.com",
    databaseURL: "https://sirkelrsvp-78394.firebaseio.com",
    projectId: "sirkelrsvp-78394",
    storageBucket: "",
    messagingSenderId: "709162040287"
  };
  firebase.initializeApp(config);


ReactDOM.render(
  //Mangil App.js
  <App />
  , document.getElementById('root'));
