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
        <a href={"#" + this.name.replace(/\s+/g, '-').toLowerCase()} onClick={ this.props.action }>
          <div className="recipe-item text-center">
            <img src={ require("../../assets/" + this.img) } alt={ this.name } />
            <br />
            <h3>{ this.name }</h3>
          </div>
        </a>
      </div>
    );
  }
}

export default Item;
