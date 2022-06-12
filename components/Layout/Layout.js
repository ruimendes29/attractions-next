import React, { Fragment } from "react";
import Navbar from "../UI/NavBar/Navbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <div className={`${classes.teste}`}></div>
      <Navbar />
      <div
        className={`${classes.page} ${
          props.shape ? classes["show-shape"] : ""
        }`}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Layout;
