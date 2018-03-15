import React from "react";
import Item from "../../components/Item";

// Images
const bbqPorkRibs = require('../../assets/recipes/bbq-pork-ribs.jpg')

class RecipesItems extends React.Component {
  render() {
    return (
      <section id="items">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Recipes</h2>
            </div>
          </div>
          <div className="row">
            <Item name="Barbecue Pork Ribs" img={ bbqPorkRibs } />
          </div>
        </div>
      </section>
    );
  }
}

export default RecipesItems;
