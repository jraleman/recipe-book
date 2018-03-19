import React, { Component } from 'react';

import Logo from './components/Logo';
import Footer from './components/Footer';

import Recipe from './screens/Recipe';
import RecipesItems from './screens/RecipesItems';

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
