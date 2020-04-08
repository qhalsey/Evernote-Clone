import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyBjpHF1e9jmc28g_t3YQIf-nQkR3PjZPWw",
//   authDomain: "evernote-clone-5a768.firebaseapp.com",
//   databaseURL: "https://evernote-clone-5a768.firebaseio.com",
//   projectId: "evernote-clone-5a768",
//   storageBucket: "evernote-clone-5a768.appspot.com",
//   messagingSenderId: "679686678892",
//   appId: "1:679686678892:web:e732492fff0fac3603ab49",
//   measurementId: "G-0PL79BT3H2",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjpHF1e9jmc28g_t3YQIf-nQkR3PjZPWw",
  authDomain: "evernote-clone-5a768.firebaseapp.com",
  databaseURL: "https://evernote-clone-5a768.firebaseio.com",
  projectId: "evernote-clone-5a768",
  storageBucket: "evernote-clone-5a768.appspot.com",
  messagingSenderId: "679686678892",
  appId: "1:679686678892:web:e732492fff0fac3603ab49",
  measurementId: "G-0PL79BT3H2",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("evernote-container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
