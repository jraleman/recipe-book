import React from "react";

// Subcomponents.
import About from './About';
import Author from './Author';

// About info.
const aboutQuote = "A recipe book is one that you use daily and what we in our \
family call 'a living book' — a book that you use all the time, not just read \
once and discard on the shelf. Recipes are by nature derivative and meant to \
be shared - that is how they improve, are changed, how new ideas are formed.";

// Author's name and url website.
const authorName = "Jose Ramon";
const authorUrl = "https://jraleman.com/"

/*
** Footer component.
*/

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

export default Footer;
