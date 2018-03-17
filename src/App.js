import React, { Component } from 'react';

import Logo from './components/Logo';
import Footer from './components/Footer';

import Recipe from './containers/Recipe';
import RecipesItems from './containers/RecipesItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <RecipesItems />
        <Recipe />
        <Footer />
      </div>
    );
  }
}

export default App;
