import React from "react";

/*
** Title component.
*/

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    return ;
  }
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>{ this.name }</h2>
        </div>
      </div>
    );
  }
}

export default Title;
