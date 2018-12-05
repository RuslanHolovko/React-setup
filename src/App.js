import React, { Component } from 'react';
import './App.sass';
import Router from './Router';
// import Header from './components/header';

// background-image
// let clsd = {
//   backgroundImage: "url(" + logo + ")"
// }

class App extends Component {

  render() {
    return (
      <div 
        className="App"
        >
          {/* <Header /> */}
          <Router />
      </div>
    );
  }
}

export default App;
