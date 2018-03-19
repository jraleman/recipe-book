import React from "react";

/*
** RecipeInfo's InfoServings subcomponent.
*/

class InfoServings extends React.Component {
  constructor(props) {
    super(props);
    this.servings = this.props.servings;
    return ;
  }
  render() {
    return (
      <div className="row">
        <div className="col-2 text-center">
          <i className="fa fa-users" aria-hidden="true" />
        </div>
        <div className="col-6">Servings</div>
        <div className="col-4">{ this.servings }</div>
      </div>
    );
  }
}

export default InfoServings;
