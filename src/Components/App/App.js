import React from 'react';
import './App.css';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component{
  componentDidMount(){
    console.log( this.props );
    this.getBuzz();
  }

  getBuzz = () =>{
    axios.get( '/test' ).then( (response)=>{
        console.log( 'back from GET:', response.data );
    } ).catch( ( err )=>{
      alert( 'nope' );
      console.log( 'err');
    })
  } // end getBuzz

  render() {
    return (
      <div className="App">
        <Header />
        <Body dispatch={ this.props.dispatch }/>
        <Footer reduxState={ this.props.reduxState }/>
      </div>
    ); // end return
  } // end render
} // end class

const reduxStateToProps = ( reduxState ) =>( { reduxState } );

export default connect( reduxStateToProps )(App);
