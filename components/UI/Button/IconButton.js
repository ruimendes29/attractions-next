import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./IconButton.module.scss";

const IconButton = (props) => {
  return (
    <button
    onClick={props.onClick}
      className={`${props.className ? props.className : ""} ${classes.btn}`}
    >
      <FontAwesomeIcon className={`${classes.icon}`} icon={props.icon} />
    </button>
  );
};

export default IconButton;
