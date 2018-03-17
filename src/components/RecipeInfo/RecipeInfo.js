import React from "react";

class RecipeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.stars = 1;
    return ;
  }
  setDifficulty(val) {
    if (val === 'easy') {
      this.stars = 1;
    }
    else if (val === "normal") {
      this.stars = 2;
    }
    else if (val === "hard") {
      this.stars = 3;
    }
    return ;
  }
  render() {
    this.setDifficulty(this.props.difficulty);
    return (
      <div className="col-md-4 pull-right wow lightSpeedIn">
        <div className="recipe-info">
          <h3>Info</h3>

          <div className="row">
            <div className="col-2 text-center">
              <i className="fa fa-clock-o" aria-hidden="true" />
            </div>
            <div className="col-6">Time</div>
            <div className="col-4">{ this.props.time } Hours</div>
          </div>

          <div className="row">
            <div className="col-2 text-center">
              <i className="fa fa-area-chart" aria-hidden="true" />
            </div>
            <div className="col-6">Difficulty</div>
            <div className="col-4">
              {Array.apply(null, Array(this.stars)).map(function(item, i) {
                return (
                  <i key={i} className="fa fa-star" aria-hidden="true" />
                );
              }, this)}
            </div>
          </div>

          <div className="row">
            <div className="col-2 text-center">
              <i className="fa fa-users" aria-hidden="true" />
            </div>
            <div className="col-6">Servings</div>
            <div className="col-4">{ this.props.servings }</div>
          </div>

        </div>
      </div>
    );
  }
}

export default RecipeInfo;
