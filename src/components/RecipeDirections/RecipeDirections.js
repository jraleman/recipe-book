import React from "react";

class RecipeDirections extends React.Component {
  render() {
    return (
      <div className="row wow slideInUp">
        <div className="col-12">
          <div className="recipe-directions">
            <h3>Directions</h3>
            <ol>
              {Array.apply(null, Array(this.props.list.length)).map(
                function(item, i) {
                  return (
                    <li key={i}>{ this.props.list[i] }</li>
                  );
                }, this)}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDirections;
