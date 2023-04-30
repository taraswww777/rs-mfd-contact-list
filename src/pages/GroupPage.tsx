import React, {memo} from 'react';
import {CommonPageProps} from './types';
import {Col, Card, Row} from 'react-bootstrap';

export const GroupPage = memo<CommonPageProps>(({contactsState, groupContactsState}) => {
  return (
    <Row xxl={4}>
      {groupContactsState[0].map(({
        id, name, photo, description, contactIds
      }) => (
        <Col key={id}>
          <Card key={id}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>{description}</Card.Body>
            <Card.Img src={photo} />
            <Card.Footer>Contacts: {contactIds.length}</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
});
