import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import BeerSingle from './components/BeerSingle';
function App() {
  return (
    <div className="App">
      {/* <h1 className = "websiteTitle">Beer land - you'll never get thirsty</h1> */}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/beers" component={AllBeers}></Route>
        <Route path="/beers/:id" component={BeerSingle}></Route>

        <Route exact path="/random-beer" component={RandomBeer}></Route>
        <Route exact path="/new-beer" component={NewBeer}></Route>
        <Route exact path="*" component={NotFound}></Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
