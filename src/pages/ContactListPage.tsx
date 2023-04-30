import React, {memo} from 'react';
import {CommonPageProps} from './types';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';

export const ContactListPage = memo<CommonPageProps>(({
  contactsState
}) => {
  return (
    <Row xxl={4} className="g-4">
      {contactsState[0].map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
