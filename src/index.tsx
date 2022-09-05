import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => (
  <h1>React Project Template with Typescript, ESLint, Webpack, and Babel!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
