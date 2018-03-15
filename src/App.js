import React, { Component } from 'react';

import Logo from './components/Logo';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default App;
