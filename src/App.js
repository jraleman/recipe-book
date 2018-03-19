import React, { Component } from 'react';

// Components
import Logo from './components/Logo';
import Footer from './components/Footer';

// Screens
import Recipe from './screens/Recipe';
import RecipesItems from './screens/RecipesItems';

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
        <RecipesItems recipe={ bbqPorkRibs } />
        <Recipe recipe={ bbqPorkRibs } />
        <Footer />
      </div>
    );
  }
}

export default App;
