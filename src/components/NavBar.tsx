import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/img/logo.png'; // 로고 이미지 import

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
        <img
          src={logo} // 로고 이미지 경로
          width="30" // 이미지 너비
          height="30" // 이미지 높이
          className="d-inline-block align-top" // 이미지 클래스
          alt="웹사이트 로고" // 이미지 설명
        />
      </Navbar.Brand>      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>홈</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>회사소개</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/service">
            <Nav.Link>서비스</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/market">
            <Nav.Link>시장</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>로그인</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/user">
            <Nav.Link>유저</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
