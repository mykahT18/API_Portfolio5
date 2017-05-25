import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Library from './components/Library';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Main />
       {/*<Library />*/}
      </div>
    );
  }
}

export default App;
