import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";

export default function Navigation() {
  return (
    <Navbar color="dark">
      <NavLink className="col-6" exact activeClassName="active" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="col-6" activeClassName="active" to="/add-article">
        Add Article
      </NavLink>
    </Navbar>
  );
}
