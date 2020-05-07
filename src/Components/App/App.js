import React from 'react';
import './App.css';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';

class App extends React.Component{
  componentDidMount(){
    console.log( this.props );
  }

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

const reduxStateToProps = ( reduxState ) =>( { reduxState } );

export default connect( reduxStateToProps )(App);
