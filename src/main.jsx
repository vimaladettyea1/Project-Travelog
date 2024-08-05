import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";
import Planner from './Final-phase/Planner.jsx';
import Background from "./Final-phase/Background.jsx";
import MapComponent from "./Final-phase/MapComponent.jsx";
import LinkRouter from "./LinkRouter.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LinkRouter/>
  </React.StrictMode>
);
