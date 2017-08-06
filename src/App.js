import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navbar';
import VerticalNavBox from './components/VerticalNavBox';
import './style.css';




class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <div className="Body">
            <SearchForm />
            <VerticalNavBox />
          </div>
      </div>
    );
  }
}

export default App;
