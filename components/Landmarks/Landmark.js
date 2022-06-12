import Image from "next/image";
import React, { useState } from "react";
import classes from "./Landmark.module.scss";

const Landmark = (props) => {
  const [ratio, setRatio] = useState(16 / 9);
  const [isActive, setIsActive] = useState(false);
  const withWidthAndHeight = { width: 200 * ratio, height: 200 };
  return (
    <div
      id={props.id}
      onClick={() => {
        setIsActive((a) => {
          if (a) {
            setTimeout(()=>{
              document.getElementById(props.id).scrollIntoView({block:"end"})},10)
          } else {
            document.body.scrollIntoView({ block: "start" });
          }
          return !a;
        });
      }}
      className={`shadow ${isActive ? classes.active : ""} ${classes.landmark}`}
    >
      <div className={`${classes["img-wrapper"]}`}>
        <Image
          onLoadingComplete={(result) => {
            console.log(result);
            setRatio(result.naturalWidth / result.naturalHeight);
            console.log(
              props.name + " " + result.naturalWidth / result.naturalHeight
            );
          }}
          src={props.image}
          alt="location"
          {...(!isActive
            ? withWidthAndHeight
            : { width: 800 * ratio, height: 800 })}
        />
      </div>

      <h1>{props.name}</h1>
      <h3>{props.location}</h3>
    </div>
  );
};

export default Landmark;
