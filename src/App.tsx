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
          <Col xxl={12}>
            <h1>Книга контактов</h1>
          </Col>
          <Col xxl={4}>
            <aside>

            </aside>
          </Col>
          <Col xxl={8}>
            <main>

            </main>
          </Col>
          <Col xxl={12}>
            <footer>

            </footer>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}
