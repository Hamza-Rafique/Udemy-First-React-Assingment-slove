import React from "react";

const UserInput = props => {
  const style = {
    border: "2px solid red"
  };
  return (
    <div>
      <h3>Enter any text in inbox</h3>
      <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default UserInput;
