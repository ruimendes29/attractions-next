import Link from "next/link";
import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../../public/logo1.png";
import texto from "../../../public/go-search.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={`shadow ${classes.nav}`}>
      <ul className={`${classes["nav-items"]}`}>
        <li
        className={`${classes.img}`}
          onClick={() => {
            router.push("/");
          }}
        >
          <Image width={150} height={50}  src={logo} alt="logo" />
        </li>
        <li className={`${classes.tabs}`}>
          <Link href={"/search"}>Search</Link>
          <Link href={"/upload"}>Upload</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
