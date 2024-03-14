import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Offcanvas, Button, FormControl, Form, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/logo.png'; // Ensure this path is correct
import './NavBar.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (link:string) => {
    setActiveLink(link);
    handleClose(); // Close the offcanvas when a link is clicked
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" style={{ fontSize: '2em' }}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Website Logo"
          />
        </Navbar.Brand>   
        
        <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ color: 'black', fontSize: '2em' }} onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>홈</NavLink>
              <NavLink to="/about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>회사소개</NavLink>
              <NavLink to="/service" className={`nav-link ${activeLink === 'service' ? 'active' : ''}`} onClick={() => handleClick('service')}>서비스</NavLink>
              <NavLink to="/market" className={`nav-link ${activeLink === 'market' ? 'active' : ''}`} onClick={() => handleClick('market')}>시장</NavLink>
              <NavLink to="/login" className={`nav-link ${activeLink === 'login' ? 'active' : ''}`} onClick={() => handleClick('login')}>로그인</NavLink>
              <NavLink to="/user" className={`nav-link ${activeLink === 'user' ? 'active' : ''}`} onClick={() => handleClick('user')}>유저</NavLink>
              <NavLink to="/community" className={`nav-link ${activeLink === 'community' ? 'active' : ''}`} onClick={() => handleClick('user')}>커뮤니티</NavLink>
              <NavDropdown title="회사소개" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">000소개</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">000리포트</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex mt-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default NavBar;