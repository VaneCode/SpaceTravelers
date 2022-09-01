import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import planet from '../images/planet.png';
import './Navbar.css';

const Navigation = () => {
  const [state, setState] = useState(1);
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        borderBottom: '0.01rem solid #888',
        width: '100%',
        padding: '0.5rem',
      }}
    >
      <div>
        <img
          src={planet}
          alt="logo"
          style={{ marginRight: '0.5rem', marginLeft: '1rem' }}
        />
      </div>
      <Navbar.Brand href="/" className="mr-auto p-2">
        <Link to="/" className="brand">
          Space Traveler&apos;s Hub
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="Navbar toggle" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link>
            <Link
              to="/"
              style={{
                textDecoration: state === 1 ? 'underline' : 'none',
              }}
              onClick={() => setState(1)}
            >
              Rockects
            </Link>
          </Nav.Link>
          <Nav.Link className="nonActive">
            <Link
              to="/missions"
              style={{
                textDecoration: state === 2 ? 'underline' : 'none',
              }}
              onClick={() => setState(2)}
            >
              Missions
            </Link>
          </Nav.Link>
          <div className="line" />
          <Nav.Link className="nonActive">
            <Link
              to="/profile"
              style={{
                textDecoration: state === 3 ? 'underline' : 'none',
              }}
              onClick={() => setState(3)}
            >
              My profile
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
