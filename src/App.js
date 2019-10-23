import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute"


function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
