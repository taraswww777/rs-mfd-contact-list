import React, {FC} from 'react';
import {CommonPageProps} from './types';
import {Card, Col, ListGroup, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const HomePage: FC<CommonPageProps> = ({
  contactsState
}) => {
  return (
    <Row xxl={4} className="g-4">
      {contactsState[0].map(({
        photo, id, name,
        phone,
        birthday,
        address,
      }) => (
        <Col key={id}>
          <Card key={id}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <ListGroup>
                  <ListGroup.Item><Link to={`tel:${phone}`} target="_blank">{phone}</Link></ListGroup.Item>
                  <ListGroup.Item>{birthday}</ListGroup.Item>
                  <ListGroup.Item>{address}</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
