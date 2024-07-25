import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light py-3">
      <div className="container">
        <h3 className="mb-0">Copyright Joanzam</h3>
      </div>
    </footer>
  );
};

export default Footer;