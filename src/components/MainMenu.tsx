import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><h1>Книга контактов</h1></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Groups">Группы</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
