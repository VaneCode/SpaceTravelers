import { Link, NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <div>
      <div>
        <img src={planet} alt="logo" />
      </div>
      <Link to="/">Space Traveler&apos;s Hub</Link>
    </div>
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/profile">My profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
