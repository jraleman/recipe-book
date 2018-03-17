import React from "react";

class RecipeIngredients extends React.Component {
  render() {
    return (
      <div className="row wow slideInUp">
        <div className="col-12">
          <div className="recipe-ingredients">
            <h3>Ingredients</h3>
            <dl className="ingredients-list">
              <dt>10</dt> <dd>country-style pork ribs</dd>
              <dt>2</dt> <dd>tablespoons garlic powder</dd>
              <dt>1</dt> <dd>tablespoon salt</dd>
              <dt>1</dt> <dd>tablespoon pepper</dd>
              <dt>2</dt> <dd>cups of your favorite barbecue sauce</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeIngredients;
