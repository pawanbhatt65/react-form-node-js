import React, { Fragment } from "react";

// css
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button
        type={props.type || "button"}
        className={`${classes["button-cls"]} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Fragment>
  );
};

export default Button;
