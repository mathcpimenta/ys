import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Survey from './Survey/Survey';

const root = ReactDOM.createRoot(document.getElementById('my-survey'));

root.render(
  <React.StrictMode>
    <Survey />
  </React.StrictMode>
);
