import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>{ this.props.name }</h2>
        </div>
      </div>
    );
  }
}

export default Title;
