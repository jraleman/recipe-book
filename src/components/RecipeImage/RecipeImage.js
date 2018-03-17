import React from "react";

class RecipeImage extends React.Component {
  render() {
    return (
      <div className="col-md-8 pull-left wow swing">
        <img
          src={ this.props.img }
          alt={ this.props.name }
          className="recipe-picture"
        />
      </div>
    );
  }
}

export default RecipeImage;
