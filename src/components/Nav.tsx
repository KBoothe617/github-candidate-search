import { NavLink } from 'react-router-dom';

// Navigation bar component to link between the pages
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="navbar navbar-expand-lg navbar-dar bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/SavedCandidates">Potential Candidates</NavLink>
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
