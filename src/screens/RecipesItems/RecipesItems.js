import React from "react";

// Components
import Title from "../../components/Title";
import Item from "../../components/Item";

/*
** RecipeItems screen
*/

class RecipesItems extends React.Component {
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
    return ;
  }
  render() {
    return (
      <section id="items">
        <div className="container">
          <Title name="Recipes" />
          <div className="row">
            <Item
              name={ this.name }
              img={ require("../../assets/" + this.img) }
            />
          </div>
        </div>
      </section>
    );
  }
}

export default RecipesItems;
