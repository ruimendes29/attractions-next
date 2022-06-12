import React, { useEffect } from "react";
import UploadForm from "../components/Upload/UploadForm";
import vercelLogo from "../public/vercel.svg";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const Homepage = (props) => {
  useEffect(() => {
    const previousCookie = document.cookie;
    if(previousCookie)
    {
      const name = previousCookie.split(/(\=|\;)/)[1];
      console.log(name);
    }
    console.log(previousCookie); 
  }, []);
  return <UploadForm ratio={props.ratio}/>;
};

export function getStaticProps(){
  console.log(vercelLogo.width);
  return {
    props:{
      ratio:vercelLogo.width/vercelLogo.height
    }
  }

}

export default Homepage;
