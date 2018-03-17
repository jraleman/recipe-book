import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center">
              <h3>About</h3>
              <div className="footer-about">
                { "A recipe book is one that you use daily and what we in our " }
                { "family call 'a living book' — a book that you use all the " }
                { "time, not just read once and discard on the shelf. " }
                { "Recipes are by nature derivative and meant to be shared " }
                { "- that is how they improve, are changed, how new ideas are formed." }
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <div className="footer-author">
                { "Made with " }
                <i className="fa fa-heart" aria-hidden="true" />
                { " love by " }
                <a href="https://jraleman.com/" target="_blank" rel="noopener noreferrer">
                  { "Jose Ramon." }
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
