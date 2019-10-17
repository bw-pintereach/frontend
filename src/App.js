import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
