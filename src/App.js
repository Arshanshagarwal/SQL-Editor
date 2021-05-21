import React from "react";
// import CodeEditor from "./components/Editor/editor.jsx";
import Header from "./components/Header/header.jsx";
import Content from "./components/Content/content.jsx";
import Content1 from "./components/Content1/content1.jsx";
import "./assests/app.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content1 />
      <Content />
    </div>
  );
}
