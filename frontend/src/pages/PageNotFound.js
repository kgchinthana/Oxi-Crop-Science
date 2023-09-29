import React from "react";
import img404 from "../components/images/404.jpg";
import "../styles/pagenotfound.css"
import { Image } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <div className="container">
      <Image src={img404} alt="404-Page Not Found" className="notfound"  fluid></Image>
      <h2 className=" align-content-center">Page Not Found!</h2>
    </div>
  );
};

export default PageNotFound;
