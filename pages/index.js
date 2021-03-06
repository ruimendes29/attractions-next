import React, { useEffect } from "react";
import Home from "../components/Home/Home";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const Homepage = () => {
  useEffect(() => {
    const previousCookie = document.cookie;
    if(previousCookie)
    {
      const name = previousCookie.split(/(\=|\;)/)[1];
      console.log(name);
    }
    console.log(previousCookie); 
  }, []);
  return <Home/>;
};

export default Homepage;
