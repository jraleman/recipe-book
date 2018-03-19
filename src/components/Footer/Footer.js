import React from "react";

const aboutQuote = "A recipe book is one that you use daily and what we in our \
family call 'a living book' — a book that you use all the time, not just read \
once and discard on the shelf. Recipes are by nature derivative and meant to \
be shared - that is how they improve, are changed, how new ideas are formed.";

const authorName = "Jose Ramon";
const authorUrl = "https://jraleman.com/"

class Footer extends React.Component {
  constructor(props) {
    super(props);
    return ;
  }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <About info={ aboutQuote } />
            <Author
              name={ authorName }
              url={ authorUrl }
            />
          </div>
        </div>
      </footer>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    return ;
  }
  render() {
    return (
      <div className="col-md-6 col-sm-12 text-center">
        <h3>About</h3>
        <div className="footer-about">
          { this.props.info }
        </div>
      </div>
    );
  }
}

class Author extends React.Component {
  constructor(props) {
    super(props);
    return ;
  }
  render() {
    return (
      <div className="col-md-6 col-sm-12 text-center">
        <div className="footer-author">
          {"Made with "}
          <i className="fa fa-heart" aria-hidden="true" />
          {" love by "}
          <a href={ this.props.url } target="_blank" rel="noopener noreferrer">
            { this.props.name } {"."}
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
