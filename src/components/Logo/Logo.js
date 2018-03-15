import React from "react";

const logoImage = require("../assets/logo-white.svg");

class Logo extends React.Component {
  render() {
    return (
      <section id="logo">
        <div className="container text-center wow pulse">
          <img src={ logoImage } alt="logo" />
          <br />
          <h1>Recipe Book</h1>
        </div>
      </section>
    );
  }
}

export default Logo;
