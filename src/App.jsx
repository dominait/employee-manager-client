import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AppBar from './components/appbar'
import './css/reboot.css'

import {HomePage, LoginPage, RegisterPage, PageNotFound} from './pages'
 
function App() {
  return (
     <Router>
       <AppBar/>
       <Switch>
       <Route exact path="/"><HomePage/></Route>
       <Route path="/login"><LoginPage/></Route>
       <Route path="/register"><RegisterPage/></Route>
       <Route path="*"><PageNotFound/></Route>
       </Switch>
     </Router>
   
  );
}

export default App;
