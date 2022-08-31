import { NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import planet from '../images/planet.png';

const Navbar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <div>
        <img src={planet} alt="logo" />
      </div>
      <Navbar.Brand href="/">Space Traveler&apos;s Hub</Navbar.Brand>
      <Navbar.Toggle aria-controls="Navbar toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'rockets-link active-link' : 'none')}
          >
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? 'missions-link active-link' : 'none')}
          >
            Missions
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'myprofile-link active-link' : 'none myprofile-none')}
          >
            My profile
          </NavLink>
          <Nav.Link>Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navbar;
