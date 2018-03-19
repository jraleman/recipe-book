import React from "react";

/*
** Item component.
*/

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.recipe = this.props.recipe;
    this.img = this.recipe.recipeImage;
    this.name = this.recipe.recipeName;
    this.time = this.recipe.infoTime;
    this.difficulty = this.recipe.infoDifficulty;
    this.servings = this.recipe.infoServings;
    this.ingredients = this.recipe.ingredientsList;
    this.directions = this.recipe.directionsList;
    //this.url = <path-to-recipe> - via Link or something...;
    return ;
  }
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeIn">
        <div className="recipe-item text-center">
          <a href={ this.url }>
            <img src={ require("../../assets/" + this.img) } alt={ this.name } />
          </a>
          <br />
          <h3>{ this.name }</h3>
        </div>
      </div>
    );
  }
}

export default Item;
