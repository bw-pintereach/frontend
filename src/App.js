import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddArticle from "./components/AddArticle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add-article" component={AddArticle} />
    </div>
  );
}

export default App;
