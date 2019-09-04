import React, {Component} from 'react';

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      time: false
    };
  }

  render() {
    return (
      <p>
        {this.state.time ? 'Good Morning' : 'Good Afternoon'}
      </p>
    )
  }
}

export default Greeting;