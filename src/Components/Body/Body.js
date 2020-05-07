import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import 'typeface-roboto';
import { ThemeProvider as MuiThemeProvider }from '@material-ui/core/styles/';
import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';

const myTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: yellow
  }
}) // end theme

class Body extends Component{
  state={
    name:''
  }

  componentDidMount(){
    console.log( this.props );
  }

  handleChange = ( event ) =>{
    console.log( 'in handleChange:', event.target.value );
    this.setState({
      name: event.target.value
    }) // end setState
  } // end handleChange

  handleClick = () =>{
    console.log( 'in handleClick' );
    this.props.dispatch( 
      { 
        type: 'setName',
        payload: this.state.name
      } // end object being dispatched
    ) // end dispatch
  } // end handle click

  render() {
    return (
      <div>
        <h1>Body.js</h1>
        <MuiThemeProvider theme={ myTheme }>
          <TextField placeholder="name" onChange={ this.handleChange }></TextField>
          <Button color="primary" variant="outlined" onClick={ this.handleClick }>Save Name</Button>
        </MuiThemeProvider>
      </div>
    ); // end return
  } // end render
} // end class

export default Body;
