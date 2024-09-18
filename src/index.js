import React from 'react';
import ReactDOM from 'react-dom/client';
import 'ionicons/icons';
import './styles/global.css';
import './styles/reused.css';
import './styles/reset.css';


import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);