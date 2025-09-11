import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/global.css";
import "./styles/components.css";
import "./styles/layout.css";
import "./styles/terminal.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
