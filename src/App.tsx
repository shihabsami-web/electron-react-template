import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element');
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <h1>Hello from React!</h1>
  </React.StrictMode>
);
