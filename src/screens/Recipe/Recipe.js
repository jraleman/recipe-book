import React from "react";

import Title from '../../components/Title';

import RecipeImage from "../../components/RecipeImage";
import RecipeInfo from "../../components/RecipeInfo";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeDirections from "../../components/RecipeDirections";

// Images
const bbqPorkRibs = require('../../assets/recipes/bbq-pork-ribs.jpg')

// Ingredients list
var ingredientsList = [
  {amount : "10", ingredient : "country-style pork ribs"},
  {amount : "2",  ingredient : "tablespoons garlic powder"},
  {amount : "1",  ingredient : "tablespoon salt"},
  {amount : "1",  ingredient : "tablespoon pepper"},
  {amount : "2",  ingredient : "cups of your favorite barbecue sauce"}
];

// Directions list
var directionsList = [
  "Preheat oven to 325.",
  "Place ribs meaty side up in an ungreased baking dish.",
  "Sprinkle with garlic powder, salt, and pepper.",
  "Cover with foil and bake for 2 hours.",
  "Drain liquid.",
  "Brush ribs generously with BBQ sauce.",
  "Bake uncovered for an additional 30 minutes in oven or on the BBQ.",
  "Add more sauce half-way through."
];

class Recipe extends React.Component {
  render() {
    return (
      <section id="recipe">
        <div className="container">
          <Title name="BBQ Pork Ribs" />
          <div className="row vertical-align">
            <div className="col-12">

              <RecipeImage
                img={ bbqPorkRibs }
                name="bbq-pork-ribs"
              />

              <RecipeInfo
                time="3.00"
                difficulty="hard"
                servings="5"
              />

            </div>
          </div>

          <RecipeIngredients
            list={ ingredientsList }
          />

          <RecipeDirections
            list={ directionsList }
          />

          <div className="row wow rollIn">
            <div className="col-12 text-center">
              <a href="index.html">
                <i className="fa fa-backward" aria-hidden="true" />
                { " Go to back to recipes." }
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Recipe;