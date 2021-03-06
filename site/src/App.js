import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import MobileNav from './components/mobilenav'


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component ={Home}/>
      <Route exact path = "/about" component ={About}/>
      <Route exact path = "/work" component ={Work}/>
      <Route exact path = "/contact" component ={Contact}/>
      <Route exact path = '/hamburger' component = {MobileNav}/>
    </div>
  );
}

export default App;
