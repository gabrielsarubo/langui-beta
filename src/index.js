import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Importar SCSS para o app inteiro conseguir utilizar as classes do Bootstrap
import 'bootstrap/scss/bootstrap.scss';
// Importar icones Web Font do pacote 'bootstrap-icons'
import 'bootstrap-icons/font/bootstrap-icons.css';
// CSS para o app
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
