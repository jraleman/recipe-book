import React from 'react';

/*
** Item component.
*/

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.recipe = this.props.recipe;
    this.img = this.recipe.recipeImage;
    this.name = this.recipe.recipeName;
    return ;
  }
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeIn">
        <div className="recipe-item text-center">
          <img src={ require("../../assets/" + this.img) } alt={ this.name } />
          <br />
          <h3>{ this.name }</h3>
        </div>
      </div>
    );
  }
}

export default Item;
