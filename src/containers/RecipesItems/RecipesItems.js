import React from "react";
import Title from "../../components/Title";
import Item from "../../components/Item";

// Images
const bbqPorkRibs = require('../../assets/recipes/bbq-pork-ribs.jpg')

class RecipesItems extends React.Component {
  render() {
    return (
      <section id="items">
        <div className="container">
          <Title name="Recipes" />
          <div className="row">
            <Item name="Barbecue Pork Ribs" img={ bbqPorkRibs } />
          </div>
        </div>
      </section>
    );
  }
}

export default RecipesItems;
