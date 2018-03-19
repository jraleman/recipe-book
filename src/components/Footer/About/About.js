import React from "react";

/*
** About component.
*/

class About extends React.Component {
  constructor(props) {
    super(props);
    this.info = this.props.info;
    return ;
  }
  render() {
    return (
      <div className="col-md-6 col-sm-12 text-center">
        <h3>About</h3>
        <div className="footer-about">
          { this.info }
        </div>
      </div>
    );
  }
}

export default About;
