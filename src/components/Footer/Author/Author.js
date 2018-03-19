import React from "react";

/*
** Author component.
*/

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.url = this.props.url;
    this.name = this.props.name;
    return ;
  }
  render() {
    return (
      <div className="col-md-6 col-sm-12 text-center">
        <div className="footer-author">
          {"Made with "}
          <i className="fa fa-heart" aria-hidden="true" />
          {" love by "}
          <a href={ this.url } target="_blank" rel="noopener noreferrer">
            { this.name } {"."}
          </a>
        </div>
      </div>
    );
  }
}

export default Author;
