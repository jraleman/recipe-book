import React from "react";

/*
** RecipeInfo's InfoTime subcomponent.
*/

class InfoTime extends React.Component {
  constructor(props) {
    super(props);
    this.time = this.props.time;
    return ;
  }
  render() {
    return (
      <div className="row">
        <div className="col-2 text-center">
          <i className="fa fa-clock-o" aria-hidden="true" />
        </div>
        <div className="col-6">Time</div>
        <div className="col-4">{ this.time } Hrs</div>
      </div>
    );
  }
}

export default InfoTime;
