import React from "react";

/*
** RecipeImage component.
*/

class RecipeImage extends React.Component {
  constructor(props) {
    super(props);
    this.img = this.props.img;
    this.name = this.props.name;
    return ;
  }
  render() {
    return (
      <div className="col-md-8 pull-left wow swing">
        <img
          src={ this.img }
          alt={ this.name }
          className="recipe-picture"
        />
      </div>
    );
  }
}

export default RecipeImage;
