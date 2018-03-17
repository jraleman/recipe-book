import React from "react";

/*
** Helper function used as an abstraction to loop over an object's entries.
*/

function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

class RecipeIngredients extends React.Component {
  constructor(props) {
    super(props);
    return ;
  }
  render() {
    return (
      <div className="row wow slideInUp">
        <div className="col-12">
          <div className="recipe-ingredients">
            <h3>Ingredients</h3>
            <dl className="ingredients-list">

              {/* key={i}, key{i + 100}, key{i + 200} ->
                  hack to hide unique key warning for each children */}
              {mapObject(this.props.list, function (i, item) {
                return (
                  <span key={i}>
                    <dt key={i + 100}>{ item.amount }</dt>
                    <dd key={i + 200}>{ item.ingredient }</dd>
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
