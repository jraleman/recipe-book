import React from 'react';

// Components
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import Footer from './components/Footer';

// Screens
import Recipe from './screens/Recipe';

// Recipes
const bbqPorkRibs = require('./assets/recipes/bbq-pork-ribs.json');
const sweetPotatoCasserole = require('./assets/recipes/sweet-potato-casserole.json');
const whiteSangriaPopsicles = require('./assets/recipes/white-sangria-popsicles.json');

/*
** Main screen
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    return ;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section id="items">
          <div className="container">
            <Title name="Recipes" />
            <div className="row">
              {/* For loop goes here... */}
              <Item recipe={ bbqPorkRibs } />
              <Item recipe={ sweetPotatoCasserole } />
              <Item recipe={ whiteSangriaPopsicles } />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
