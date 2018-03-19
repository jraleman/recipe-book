import React from "react";

// Components
import Title from '../../components/Title';
import RecipeImage from "../../components/RecipeImage";
import RecipeInfo from "../../components/RecipeInfo";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeDirections from "../../components/RecipeDirections";
import BackButton from "../../components/BackButton";

/*
** Recipe screen
*/

class Recipe extends React.Component {
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
      <section id="recipe">
        <div className="container">
          <Title name={ this.name } />
          <div className="row vertical-align">
            <div className="col-12">
              <RecipeImage
                img={ require("../../assets/" + this.img) }
                name={ this.name }
              />
              <RecipeInfo
                time={ this.time }
                difficulty={ this.difficulty }
                servings={ this.servings }
              />
            </div>
          </div>
          <RecipeIngredients list={ this.ingredients } />
          <RecipeDirections list={ this.directions } />
          <BackButton />
        </div>
      </section>
    );
  }
}

export default Recipe;
