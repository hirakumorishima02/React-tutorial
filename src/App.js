import React, {Component} from 'react';

class Greeting extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      time: false
    };
  }

  handleClick() {
    this.setState({
      time: !this.state.time
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.time ? 'Good Morning' : 'Good Afternoon'}</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default Greeting;