import React from "react";

class RecipeInfo extends React.Component {
  render() {
    return (
      <div className="col-md-4 pull-right wow lightSpeedIn">
        <div className="recipe-info">
          <h3>Info</h3>
          {}
          <div className="row">
            <div className="col-2 text-center">
              <i className="fa fa-clock-o" aria-hidden="true" />
            </div>
            <div className="col-6">Time</div>
            <div className="col-4">3:00 H</div>
          </div>
          {}
          <div className="row">
            <div className="col-2 text-center">
              <i className="fa fa-area-chart" aria-hidden="true" />
            </div>
            <div className="col-6">Difficulty</div>
            <div className="col-4">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </div>
          </div>
          {}
          <div className="row">
            <div className="col-2 text-center">
              <i className="fa fa-users" aria-hidden="true" />
            </div>
            <div className="col-6">Servings</div>
            <div className="col-4">5</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeInfo;
