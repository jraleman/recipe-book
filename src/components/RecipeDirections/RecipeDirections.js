import React from "react";

/*
** RecipeDirections component.
*/

class RecipeDirections extends React.Component {
  constructor(props) {
    super(props);
    this.list = this.props.list;
    this.listLen = this.props.list.length;
    return ;
  }
  render() {
    return (
      <div className="row wow slideInUp">
        <div className="col-12">
          <div className="recipe-directions">
            <h3>Directions</h3>
            <ol>
              {Array.apply(null, Array(this.listLen)).map(
                function(item, i) {
                  return (
                    <li key={i}>{ this.list[i] }</li>
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
