import React from "react";

// Subcomponents.
import InfoTime from './InfoTime';
import InfoDifficulty from './InfoDifficulty';
import InfoServings from './InfoServings';

/*
** RecipeInfo component.
*/

class RecipeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.time = this.props.time;
    this.difficulty = this.props.difficulty;
    this.servings = this.props.servings;
    return ;
  }
  render() {
    return (
      <div className="col-md-4 pull-right wow lightSpeedIn">
        <div className="recipe-info">
          <h3>Info</h3>
          <InfoTime time={ this.time } />
          <InfoDifficulty difficulty={ this.difficulty } />
          <InfoServings servings={ this.servings } />
        </div>
      </div>
    );
  }
}

export default RecipeInfo;
