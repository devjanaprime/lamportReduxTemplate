import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import 'typeface-roboto';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
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
  componentDidMount(){
    console.log( this.props );
  }
  render() {
    return (
      <div>
        <h1>Body.js</h1>
        <MuiThemeProvider theme={ myTheme }>
          <Button color="primary" variant="outlined">Button 1</Button>
          <Button color="secondary" variant="outlined">Button 2</Button>
        </MuiThemeProvider>
      </div>
    ); // end return
  } // end render
} // end class

export default Body;
