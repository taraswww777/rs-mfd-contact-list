import React from 'react';
import './App.scss';
import {Col, Container, Row, ThemeProvider} from 'react-bootstrap';

export const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container>
        <Row>
          <Col
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            xxl={2}
          >rs-mfd-contact-list</Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}
