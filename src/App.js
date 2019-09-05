import React, {Component} from 'react';
<<<<<<< HEAD

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
=======
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title:''};
  }

  componentDidMount() {
    this.setState({title:'Laravelとねころっけくん5.8'})
>>>>>>> feature/#1_Add_Lifecycle_Method
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <p>{this.state.time ? 'Good Morning' : 'Good Afternoon'}</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default Greeting;
=======
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
>>>>>>> feature/#1_Add_Lifecycle_Method
