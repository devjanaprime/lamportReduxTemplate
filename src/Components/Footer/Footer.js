import React, {Component} from 'react';

class Footer extends Component{
  render() {
    return (
      <div>
        <h1>Footer.js</h1>
        <p>{ JSON.stringify( this.props.reduxState ) }</p>
      </div>
    ); // end return
  } // end render
} // end class

export default Footer;
