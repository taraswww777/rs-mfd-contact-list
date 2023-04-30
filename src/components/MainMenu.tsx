import {Link} from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import React from 'react';

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to="/"><h1>Книга контактов</h1></Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">рщьу</Link></Nav.Link>
          <Nav.Link><Link to="/Groups">Группы</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
