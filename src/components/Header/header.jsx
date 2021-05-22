import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="left-text">
          <a className="AA-link link" href="https://github.com/Arshanshagarwal">
            A A
          </a>
        </div>
        <div className="right-text">
          <a
            className="github-link link"
            title="Github Repo"
            href="https://github.com/Arshanshagarwal/SQL-Editor"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
