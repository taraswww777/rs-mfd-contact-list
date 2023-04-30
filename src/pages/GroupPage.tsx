import React, {FC} from 'react';
import {CommonPageProps} from './types';

export const GroupPage: FC<CommonPageProps> = ({contactsState}) => {
  return (
    <div>
      <p>GroupPage</p>
      <p>
        contactsState:
        {JSON.stringify(contactsState[0])}
      </p>
    </div>
  );
}
