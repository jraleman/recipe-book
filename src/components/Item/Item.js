import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeIn">
        <div className="recipe-item text-center">
          <a href="recipe.html">
            <img src={ this.props.img } alt={ this.props.name } />
          </a>
          <br />
          <h3>{ this.props.name }</h3>
        </div>
      </div>
    );
  }
}

export default Item;
