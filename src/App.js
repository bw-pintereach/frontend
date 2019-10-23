import React from 'react';

import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute"
import AddArticle from './components/AddArticle';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/add-article" component={AddArticle} />
            <Route path="/login" component={Login} />
            <Route component={Login} />            
         </Switch>
        </header>
      </div>
    </Router>
)}
export default App;
