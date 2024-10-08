// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/blogs">Blogs</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink for dynamic link styling

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" activeClassName="active">
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
