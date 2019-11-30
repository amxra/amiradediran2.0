import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component ={Home}/>
    </div>
  );
}

export default App;
