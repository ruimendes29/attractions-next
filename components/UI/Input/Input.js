import React from "react";
import IconButton from "../Button/IconButton";
import classes from "./Input.module.scss";

const Input = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !props.invalid) {
      props.onClick();
    }
  };
  return (
    <div
      className={`${props.className} ${props.invalid ? classes.invalid : ""} ${
        classes.input
      }`}
    >
      <label htmlFor={`${props.name}`}>{props.name}</label>
      <div className={`${classes["invalid-text"]}`}>{props.error}</div>
      <input
        onKeyDown={props.onClick ? handleKeyDown : ()=>{}}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
        type={props.type || "text"}
        id={`${props.name}`}
      />
      {props.icon_button && (
        <IconButton
          onClick={props.onClick}
          className={`${classes.icon}`}
          icon={props.icon_button}
        />
      )}
    </div>
  );
};

export default Input;
