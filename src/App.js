import React, { Component } from 'react';

import Logo from './components/Logo';
import Footer from './components/Footer';

import RecipesItems from './containers/RecipesItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <RecipesItems />
        <Footer />
      </div>
    );
  }
}

export default App;
