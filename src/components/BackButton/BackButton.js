import React from "react";

/*
** BackButton component.
*/

class BackButton extends React.Component {
  constructor(props) {
    super(props);
    return ;
  }
  render () {
    return (
      <div className="row wow rollIn">
        <div className="col-12 text-center">
          <a href="index.html">
            <i className="fa fa-backward" aria-hidden="true" />
            { " Go back to recipes." }
          </a>
        </div>
      </div>
    );
  }
}

export default BackButton;
