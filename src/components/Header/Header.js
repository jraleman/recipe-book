import React from "react";

// Logo image file path.
const logoPath = require("../../assets/logo-white.svg");

/*
** Logo component.
*/

class Header extends React.Component {
  constructor(props) {
    super(props);
    return ;
  }
  render() {
    return (
      <section id="logo">
        <div className="container text-center wow pulse">
          <img src={ logoPath } alt="logo" />
          <br />
          <h1>Recipe Book</h1>
        </div>
      </section>
    );
  }
}

export default Header;
