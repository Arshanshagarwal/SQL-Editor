import React, { useState, useRef, useEffect } from "react";
import "./content.css";
// import { isConstructorDeclaration } from "typescript";

function Content() {
  const [title, setTitle] = useState("");
  const titleRef = useRef();

  const updateOutput = () => {
    // setTitle(titleRef.current.value);
    if (titleRef.current.value === "show tables;") {
      setTitle(
        "categories, customers, employee_territories, employees, order_details, orders, producs, regions, shippers, suppliers, territories"
      );
    } else if (titleRef.current.value === "SELECT * from Shippers;") {
      setTitle(
        "shipperID	| companyName	| phone  1	|Speedy Express|	(503) 555-9831|"
      );
    } else {
      setTitle("Syntax error in SQL statement");
    }
  };

  const deleteInput = () => {
    titleRef.current.value = "";
    setTitle("");
  };

  const saveData = () => {
    const fileData = titleRef.current.value;
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Code.sql";
    link.href = url;
    link.click();
  };

  const saveDataOutput = () => {
    const fileData = titleRef.current.value;
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "OutputCode.txt";
    link.href = url;
    link.click();
  };

  return (
    <div className="content-box">
      <div className="content-left">
        <div className="left-title">
          <div className="heading">Input</div>
          <div className="buttons">
            <button onClick={updateOutput} className="run-button" title="Run">
              <i className="fas fa-play"></i>
            </button>
            <button onClick={deleteInput} className="run-button" title="Delete">
              <i className="fas fa-trash"></i>
            </button>
            <button
              onClick={saveData}
              className="run-button"
              title="Download input"
            >
              <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div className="left-input">
          <div className="left-text-box-header">
            <i className="fas fa-circle circle-red circle"></i>
            <i className="fas fa-circle circle-yellow circle"></i>
            <i className="fas fa-circle circle-green circle"></i>
          </div>
          <textarea
            placeholder="Write your SQL command here."
            ref={titleRef}
            className="left-input-area"
          ></textarea>
        </div>
      </div>
      <div className="content-right">
        <div className="right-title">
          <div className="heading">Ouput</div>
          <button
            onClick={saveDataOutput}
            className="run-button"
            title="Download input"
          >
            <i className="fas fa-download"></i>
          </button>
        </div>
        <div className="right-output">{title}</div>
      </div>
    </div>
  );
}

export default Content;
