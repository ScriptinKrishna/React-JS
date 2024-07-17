import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className={`shadow-lg rounded-md p-2 text-${
          props.bg == "#fff" ? "black" : "white"
        }`}
        style={{ backgroundColor: props.bg }}
        onClick={props.setColor}
      >
        {props.name}{" "}
      </button>
    </div>
  );
}

export default Button;
