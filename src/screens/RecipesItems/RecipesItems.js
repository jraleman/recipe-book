import React from "react";

// Components
import Title from "../../components/Title";
import Item from "../../components/Item";

// Recipe name
const recipeName = "BBQ Pork Ribs";

// Recipe image
const recipeImage = require('../../assets/recipes/bbq-pork-ribs.jpg')

/*
** RecipeItems screen
*/

class RecipesItems extends React.Component {
  render() {
    return (
      <section id="items">
        <div className="container">
          <Title name="Recipes" />
          <div className="row">
            <Item
              name={ recipeName }
              img={ recipeImage }
            />
          </div>
        </div>
      </section>
    );
  }
}

export default RecipesItems;
