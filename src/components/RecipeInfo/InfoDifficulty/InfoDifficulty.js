import React from "react";

/*
** RecipeInfo's InfoDifficulty subcomponent.
*/

class InfoDifficulty extends React.Component {
  constructor(props) {
    super(props);
    this.difficulty = this.props.difficulty;
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
      <div className="row">
        <div className="col-2 text-center">
          <i className="fa fa-area-chart" aria-hidden="true" />
        </div>
        <div className="col-6">Difficulty</div>
        <div className="col-4">
          {Array.apply(null, Array(this.stars)).map(
            function(item, i) {
              return (
                <i key={i} className="fa fa-star" aria-hidden="true" />
              );
            }, this)}
        </div>
      </div>
    );
  }
}

export default InfoDifficulty;
