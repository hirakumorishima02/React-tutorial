import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title:''};
  }

  componentDidMount() {
    this.setState({title:'Laravelとねころっけくん5.8'})
  }

  render() {
    return (
      <div>
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