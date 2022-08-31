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
        <NavLink to="/" className={({ isActive }) => (isActive ? 'rockets-link active-link' : 'none')}>Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions" className={({ isActive }) => (isActive ? 'missions-link active-link' : 'none')}>Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'myprofile-link active-link' : 'none myprofile-none')}>My profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
