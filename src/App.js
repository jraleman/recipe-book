import React from 'react';

// Components
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import Footer from './components/Footer';

// Screens
import Recipe from "./screens/Recipe";

// List of Recipes
const recipeList = [
  require('./assets/recipes/bbq-pork-ribs.json'),
  require('./assets/recipes/sweet-potato-casserole.json'),
  require('./assets/recipes/white-sangria-popsicles.json'),
];

/*
** Main screen
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    return ;
  }
  handleClick() {
    this.setState({
      id: null,
      clicked: true,
    });
    return ;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section id="items">
          <div className="container">
            {/* Hide 'Recipes' title if an item is selected. */}
            { this.state.clicked ? null : <Title name="Recipes" />}
            {/* Shows the recipe screen when an item is clicked */}
            { this.state.clicked ? <Recipe recipe={ whiteSangriaPopsicles } /> :
              <div className="row">
                {Array.apply(null, Array(recipeList.length)).map(
                  function(item, i) {
                    return (
                      <Item
                        key={ i }
                        recipe={ recipeList[i] }
                        onClick={ this.handleClick }
                      />
                    );
                  }, this)}
              </div>
            }
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
