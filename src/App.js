import './App.css';
import React from 'react';
import Home from './Home/Home.js';
import About from './About/About.js';
import Merch from './Merch/Merch.js';
import NavBar from './NavBar/NavBar.js';
import FootNote from './FootNote/FootNote.js';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/shopmerch" render={(props) => <Merch {...props} />} />

      </Switch>
      <FootNote />

    </div>
  );
}

export default App;
