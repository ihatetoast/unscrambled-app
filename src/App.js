import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <div> 
          {this.props.children}
        </div>
       <Footer />
      </div>
    );
  }
}

export default App;
