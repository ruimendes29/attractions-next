import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import Landmarks from "../Landmarks/Landmarks";
import Input from "../UI/Input/Input";
import classes from "./Search.module.scss";

const Search = (props) => {
  const textInput = useInput((el) => {
    return el.trim() !== "";
  });
  const [filteredLandmarks, setFilteredLandmarks] = useState(props.landmarks);

  const handleSearch = () => {
    const rx = new RegExp(textInput.enteredValue.toLowerCase());
    const newLandmarks = props.landmarks.filter(el => (rx.test(el.name.toLowerCase()) || rx.test(el.location.toLowerCase())));
    console.log(newLandmarks);
    setFilteredLandmarks(newLandmarks);
  };

  return (
    <div className={`${classes["search-wrapper"]}`}>
      <Input
        className={`${classes.ipt}`}
        invalid={false}
        onChange={textInput.valueChanged}
        value={textInput.enteredValue}
        onBlur={textInput.touchedHandler}
        name="Search"
        error="Name can not be empty!"
        icon_button={faMagnifyingGlass}
        onClick={handleSearch}
      />
      <Landmarks landmarks={filteredLandmarks} />
    </div>
  );
};

export default Search;
