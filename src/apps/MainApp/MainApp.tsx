import React, {memo, useEffect, useState} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {HomePage, GroupPage} from 'src/pages';
import {ContactDto} from 'src/types/dto/ContactDto';
import {FavoriteContactsDto} from 'src/types/dto/FavoriteContactsDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';
import {genFullContacts} from 'src/utils/generators/genFullContacts';

export const MainApp = memo(() => {
  const contactsState = useState<ContactDto[]>([]);
  const favoriteContactsState = useState<FavoriteContactsDto>([]);
  const groupContactsState = useState<GroupContactsDto[]>([]);

  useEffect(() => {
    genFullContacts().then((contact) => {
      contactsState[1]((prevState) => ([...prevState, contact]))
    });
  }, [])
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
});
