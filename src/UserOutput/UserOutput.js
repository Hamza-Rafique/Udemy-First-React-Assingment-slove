import React from "react";
import "./UserOutput.css";
const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>hi hamza rafique{props.userName}</p>
      <p>Over hiden function</p>
    </div>
  );
};

export default UserOutput;
