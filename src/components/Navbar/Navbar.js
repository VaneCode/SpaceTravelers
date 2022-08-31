import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import planet from '../images/planet.png';

const Navigation = () => (
  <Navbar
    bg="light"
    expand="lg"
    style={{ borderBottomStyle: '1rem solid #888' }}
  >
    <Container className="d-flex flex-row justify-content-around aling-content-center" style={{ margin: '0', widt: '100%' }}>
      <div>
        <img src={planet} alt="logo" style={{ marginRight: '1rem' }} />
      </div>
      <Navbar.Brand href="/" className="mr-auto p-2">
        <Link to="/">Space Traveler&apos;s Hub</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="Navbar toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-self-end">
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
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
