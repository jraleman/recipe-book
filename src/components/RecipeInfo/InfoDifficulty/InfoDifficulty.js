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
    var ret = 0;
    if (difficulty === 'easy') { ret = 1; }
    else if (difficulty === "medium") { ret = 2; }
    else if (difficulty === "hard") { ret = 3; }
    return (ret);
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
