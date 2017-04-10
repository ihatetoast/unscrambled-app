import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Header tagline="Omeletting you get organised."/>
        <div> 
          <p>To be filled in </p>
          {/*{this.props.children}*/}
        </div>
       <Footer />
      </div>
    );
  }
}

export default App;
