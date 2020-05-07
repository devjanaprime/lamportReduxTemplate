import React, {Component} from 'react';

class Body extends Component{
  componentDidMount(){
    console.log( this.props );
  }
  render() {
    return (
      <div>
        <h1>Body.js</h1>
        <button>Click Me</button>
      </div>
    ); // end return
  } // end render
} // end class

export default Body;
