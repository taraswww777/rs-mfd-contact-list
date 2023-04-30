import {FC} from 'react';
import {CommonPageProps} from './types';

export const HomePage: FC<CommonPageProps> = ({
  contactsState
}) => {
  return (
    <div>
      <p>HomePage</p>
      <p>
        contactsState:
        {JSON.stringify(contactsState[0])}
      </p>
    </div>
  );
}
