import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PortadaLogin } from './pages/PortadaLogin';

let user = true

ReactDOM.render(
  <React.StrictMode>
    {user ? <App/>: <PortadaLogin/>}
  </React.StrictMode>,
  document.getElementById('root')
);

