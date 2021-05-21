import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="left-text"> A A</div>
        <div className="right-text">
          <a
            className="github-button"
            title="Github Repo"
            href="https://github.com/Arshanshagarwal/SQL-Editor"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
