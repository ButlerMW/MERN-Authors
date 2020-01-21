import React from 'react';
import { Router } from '@reach/router'
import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import Update from './views/Update'
import Create from './views/Create'

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Update path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
