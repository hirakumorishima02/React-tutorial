import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';

const greeting = ['Good Morning', 'Good Afternoon', 'Good Evening'];


ReactDOM.render(
  <Hello data = {greeting} />,
  document.getElementById('root')
);