import * as fs from 'fs';
import {genFullContacts} from './generators';
import path from 'path';
import {ContactDto} from './dto/ContactDto';

genFullContacts(50).then((values) => {
  const contacts: ContactDto[] = values.filter(({status}) => (
    status === 'fulfilled'
  // @ts-ignore
  )).map(({value}) => value);

  fs.writeFileSync(
    path.join(__dirname, "../../src/__data__/contacts.json"),
    JSON.stringify(contacts)
  );
})
