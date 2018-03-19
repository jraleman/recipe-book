import React from "react";

/*
** Item component.
*/

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.img = this.props.img;
    this.name = this.props.name;
    this.url = this.props.url;
    return ;
  }
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeIn">
        <div className="recipe-item text-center">
          <a href={ this.url }>
            <img src={ this.img } alt={ this.name } />
          </a>
          <br />
          <h3>{ this.name }</h3>
        </div>
      </div>
    );
  }
}

export default Item;
