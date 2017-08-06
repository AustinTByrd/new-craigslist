import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navbar';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <div className="Body">
            <SearchForm />
          </div>
      </div>
    );
  }
}

export default App;
