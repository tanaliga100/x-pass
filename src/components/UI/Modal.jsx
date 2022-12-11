import React from "react";

const Modal = (props) => {
  return (
    <h3
      style={{
        color: "crimson",
        padding: ".3rem 2rem",
        margin: "1rem 4rem",
      }}
    >
      {props.comment}
    </h3>
  );
};

export default Modal;
