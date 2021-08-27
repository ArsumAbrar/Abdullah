import React,{useState,useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import CoinGecko from './Components/CoinGecko';
import Coins from './Components/Coins'
import CoinData from './Components/CoinData';
import './App.css';
import Share from './Components/Share';

const App = () => {

  return(
  <>
  <Switch>
    <Route exact path="/" component={Coins} />
    <Route path="/data/:id" component={CoinData} />
  </Switch> 

  </>
 );
}
export default App;