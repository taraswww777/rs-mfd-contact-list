import React, {useState} from 'react';
import './App.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from '../../components/Layout';
import {HomePage, GroupPage} from '../../pages';
import {ContactDto} from '../../types/dto/ContactDto';
import {FavoriteContactsDto} from '../../types/dto/FavoriteContactsDto';
import {GroupContactsDto} from '../../types/dto/GroupContactsDto';

export const MainApp = () => {
  const contactsState = useState<ContactDto[]>([]);
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
}
