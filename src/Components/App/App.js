import React from 'react';
import './App.css';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    ); // end return
  } // end render
} // end class

export default App;
