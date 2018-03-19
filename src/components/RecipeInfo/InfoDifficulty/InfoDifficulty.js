import React from "react";

/*
** RecipeInfo's InfoDifficulty subcomponent.
*/

class InfoDifficulty extends React.Component {
  constructor(props) {
    super(props);
    this.difficulty = this.props.difficulty;
    this.stars = this.setDifficulty(this.difficulty.toLowerCase());
    return ;
  }
  setDifficulty(difficulty) {
    if (difficulty === 'easy') { return (1); }
    else if (difficulty === "normal") { return (2); }
    else if (difficulty === "hard") { return (3); }
    else { return (0); }
  }
  render() {
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
