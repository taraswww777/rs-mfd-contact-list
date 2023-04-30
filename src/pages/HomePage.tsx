import {FC} from 'react';
import {CommonPageProps} from './types';

export const HomePage: FC<CommonPageProps> = ({
  contactsState
}) => {
  return (
    <div>
      <p>HomePage</p>
      <div>
        {contactsState[0].map(({
          photo,id , name
        })=>(
          <div key={id}>
            <p>name: {name}</p>
            <img src={photo}/>
          </div>
        ))}
      </div>
    </div>
  );
}
