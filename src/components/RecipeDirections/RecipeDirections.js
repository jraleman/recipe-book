import React from "react";

class RecipeDirections extends React.Component {
  render() {
    return (
      <div className="row wow slideInUp">
        <div className="col-12">
          <div className="recipe-directions">
            <h3>Directions</h3>
            <ol>
              <li>Preheat oven to 325.</li>
              <li>Place ribs meaty side up in an ungreased baking dish.</li>
              <li>Sprinkle with garlic powder, salt, and pepper.</li>
              <li>Cover with foil and bake for 2 hours.</li>
              <li>Drain liquid.</li>
              <li>Brush ribs generously with BBQ sauce.</li>
              <li>
                Bake uncovered for an additional 30 minutes in oven or on the
                BBQ.
              </li>
              <li>Add more sauce half-way through.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDirections;
