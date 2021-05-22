import React from "react";
import Header from "./components/Header/header.jsx";
import Content from "./components/Content/content.jsx";
import Content1 from "./components/Content1/content1.jsx";
import "./assests/app.css";

export default function App() {
  return (
    <div className="App">
      <Header /> {/* This component helps display the Header of the App */}
      <Content1 />
      {/* This component is responsible for the help and text sections */}
      <Content />
      {/* Lastly, this is the main logic, the editor part of the code */}
    </div>
  );
}
