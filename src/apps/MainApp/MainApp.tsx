import React, {useState} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {HomePage, GroupPage} from 'src/pages';
import {ContactDto} from 'src/types/dto/ContactDto';
import {FavoriteContactsDto} from 'src/types/dto/FavoriteContactsDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';
import {DATA_CONTACT} from 'src/__data__';
import {ContactPage} from 'src/pages/ContactPage';

export const MainApp = () => {
  const contactsState = useState<ContactDto[]>(DATA_CONTACT);
  const favoriteContactsState = useState<FavoriteContactsDto>([]);
  const groupContactsState = useState<GroupContactsDto[]>([]);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
                <HomePage
                  contactsState={contactsState}
                  favoriteContactsState={favoriteContactsState}
                  groupContactsState={groupContactsState}
                />
            } />
            <Route path="contact/:contactId" element={
              <ContactPage
                contactsState={contactsState}
                favoriteContactsState={favoriteContactsState}
                groupContactsState={groupContactsState}
              />
            } />
            <Route path="group" element={
              <GroupPage
                contactsState={contactsState}
                favoriteContactsState={favoriteContactsState}
                groupContactsState={groupContactsState}
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
