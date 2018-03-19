import React, { Component } from 'react';

// Components
import Logo from './components/Logo';
import Title from './components/Title';
import Item from './components/Item';
import Footer from './components/Footer';

// Screens
import Recipe from './screens/Recipe';

// Recipes
const bbqPorkRibs = require('./assets/recipes/bbq-pork-ribs.json');

/*
** Main screen
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <section id="items">
          <div className="container">
            <Title name="Recipes" />
            <div className="row">
              <Item recipe={ bbqPorkRibs } />
            </div>
          </div>
        </section>
        <Recipe recipe={ bbqPorkRibs } />
        <Footer />
      </div>
    );
  }
}

export default App;
