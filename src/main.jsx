import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Navbar from './navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
