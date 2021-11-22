import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);
