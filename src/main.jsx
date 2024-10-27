import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WrapTheme from './_app.jsx';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrapTheme/>
  </React.StrictMode>,
);
