import React from "react";
import classes from "./Landmarks.module.scss";
import Landmark from "./Landmark";

const Landmarks = (props) => {
  return (
    <div className={`${classes.lm}`}>
      {props.landmarks && props.landmarks.map((landmark) => (
        <Landmark
          id={landmark.id}
          key={landmark.id}
          image={landmark.image}
          name={landmark.name}
          location={landmark.location}
          ratio={landmark.ratio}
        />
      ))}
    </div>
  );
};

export default Landmarks;
