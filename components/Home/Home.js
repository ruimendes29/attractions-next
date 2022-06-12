import React from "react";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import Link from "next/link";

const Home = () => {
  return (
    <div className={`${classes.home}`}>
      <h1>Find stuff to see.</h1>
      <Link href="/search">
        <Button className={`${classes.btn}`}>Go Search</Button>
      </Link>
    </div>
  );
};

export default Home;
