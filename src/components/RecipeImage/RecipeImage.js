import React from "react";

class RecipeImage extends React.Component {
  render() {
    return (
      <div className="col-md-8 pull-left wow swing">
        <img
          src="images/bbq-pork-ribs.jpg"
          alt="bbq-pork-ribs"
          className="recipe-picture"
        />
      </div>
    );
  }
}

export default RecipeImage;
