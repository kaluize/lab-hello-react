import React from "react";

function LittleBoards(props) {
  return (
    <div className="boards">
      <img alt={props.title} src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default LittleBoards;
