// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem
// } from 'reactstrap';

// const Navigation = () => {
//   return (
//     <Navbar>
//       <NavLink>Add Article</NavLink>
//       <NavLink>Add Article</NavLink>
//       <NavLink>Add Article</NavLink>
//       <NavLink>Add Article</NavLink>
//     </Navbar>
//   );
// };

// export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';

export default function Navigation() {
  return (
    <Navbar color="dark">
      <NavLink exact activeClassName="active" to="/">
        Add Article
      </NavLink>
      <NavLink activeClassName="active" to="/characters">
        Add Article
      </NavLink>
      <NavLink activeClassName="active" to="/locations">
        Add Article
      </NavLink>
      <NavLink activeClassName="active" to="/search">
        Add Article          
      </NavLink>
    </Navbar>
  );
}
