import React from "react";
import "./content1.css";

function Content1() {
  return (
    <div className="content1">
      <div className="help-div">
        <div className="title">What does this Web App do?</div>
        <div className="help-content">
          <div className="point first top">
            1. This is a SQL editor view made in ReactJS.
          </div>
          <div className="point second">
            2. It takes an SQL command as input and gives the required output.
          </div>
          <div className="point third">
            3. It can also download the input as well as output file if required
            by the user.
          </div>
          <div className="point fourth">
            4. Currently it works with only 2 commands.
          </div>
        </div>
      </div>

      <div className="background-changing-div"></div>
    </div>
  );
}

export default Content1;
