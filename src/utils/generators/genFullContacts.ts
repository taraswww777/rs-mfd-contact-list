import {genArray} from 'src/utils/generators/genArray';
import {genContact} from 'src/utils/generators/genContact';
import {genPhotoImage} from 'src/utils/generators/genPhotoImage';

export const genFullContacts = async () => {
  const promises = genArray(genContact, 3)
    .map(async (contact) => {
      return {
        ...contact,
        photo: await genPhotoImage()
      }
    });
  return await Promise.race(promises);
}


