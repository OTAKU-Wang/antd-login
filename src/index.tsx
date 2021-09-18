import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import SignInComponent from './web/components/SignInComponent';
import SignInHeaderComponent from './web/components/SignInHeaderComponent';

ReactDOM.render(
  <React.StrictMode>
    <SignInHeaderComponent />
    <SignInComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
