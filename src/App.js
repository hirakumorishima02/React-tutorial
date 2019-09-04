import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';

const data1 = {
  greet: 'Good Morning',
  name: 'Takashi'
};
const data2 = {
  greet: 'Good Evening',
  name: 'Takako'
};


ReactDOM.render(
  <div>
    <Hello data = {data1} />,
    <Hello data = {data2} />,
  </div>,
  document.getElementById('root')
);