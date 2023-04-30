import {Outlet} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';
import React from 'react';
import {MainMenu} from './MainMenu';

export const Layout = () => {
  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <MainMenu />
        </Col>
        <Col xxl={12}>
          <Outlet />
        </Col>
        <Col xxl={12}>
          <footer>

          </footer>
        </Col>
      </Row>
    </Container>
  );
}
