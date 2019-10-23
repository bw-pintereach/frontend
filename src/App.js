import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddArticle from './components/AddArticle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-article" component={AddArticle} />
      </header>
    </div>
  );
}

export default App;
