import React from "react";

/*
** Helper function used as an abstraction to loop over an object's entries.
*/

function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

/*
** RecipeIngredients component.
** Hack to hide unique key warning for each children:
**   key={i}, key{i + 1000}, key{i + 2000}
*/

class RecipeIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.list = this.props.list;
    return ;
  }
  render() {
    return (
      <div className="row wow slideInUp">
        <div className="col-12">
          <div className="recipe-ingredients">
            <h3>Ingredients</h3>
            <dl className="ingredients-list">
              {mapObject(this.list, function (i, item) {
                return (
                  <span key={i}>
                    <dt key={i + 1000}>{ item.amount }</dt>
                    <dd key={i + 2000}>{ item.ingredient }</dd>
                  </span>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeIngredients;
