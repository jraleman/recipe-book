import React from 'react';

// Components
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import Footer from './components/Footer';

// Screens
import Recipe from './screens/Recipe';

// List of Recipes
const recipeList = [
  require('./assets/recipes/bbq-pork-ribs.json'),
  require('./assets/recipes/sweet-potato-casserole.json'),
  require('./assets/recipes/white-sangria-popsicles.json'),
  require('./assets/recipes/alfredo-chicken-bake.json'),
  require('./assets/recipes/sticky-wings.json'),
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
  handleClick(val) {
    this.setState({
      id: val,
      clicked: true,
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return ;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section id="items">
          <div className="container">
            {/* Shows the recipe screen when an item is clicked */}
            { this.state.clicked ? <Recipe recipe={ this.state.id } /> :
              <div className="recipe-items">
               <Title name="Recipes" />
                <div className="row">
                  {/* Render recipe items in a map */}
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
